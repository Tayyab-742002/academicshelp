"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload, FileText, AlertCircle, Check, File } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type FileWithPreview = File & {
  preview?: string;
};

interface FileUploadProps {
  onChange: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number; // in MB
  maxTotalSize?: number; // in MB
  acceptedFileTypes?: string;
}

export function FileUpload({
  onChange,
  maxFiles = 5,
  maxSize = 10, // Default 10MB
  maxTotalSize = 20, // Default 20MB total
  acceptedFileTypes = ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png",
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const maxSizeBytes = maxSize * 1024 * 1024; // Convert MB to bytes
  const maxTotalSizeBytes = maxTotalSize * 1024 * 1024; // Convert MB to bytes

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Check if adding these files would exceed maxFiles
      if (files.length + acceptedFiles.length > maxFiles) {
        setError(`You can only upload a maximum of ${maxFiles} files.`);
        return;
      }

      // Check for individual file size
      const oversizedFiles = acceptedFiles.filter(
        (file) => file.size > maxSizeBytes
      );
      if (oversizedFiles.length > 0) {
        setError(
          `Some files exceed the ${maxSize}MB limit: ${oversizedFiles
            .map((f) => f.name)
            .join(", ")}`
        );
        return;
      }
      
      // Check total file size (existing + new files)
      const existingFilesSize = files.reduce((sum, file) => sum + file.size, 0);
      const newFilesSize = acceptedFiles.reduce((sum, file) => sum + file.size, 0);
      const totalSize = existingFilesSize + newFilesSize;
      
      if (totalSize > maxTotalSizeBytes) {
        setError(`Total file size would exceed the ${maxTotalSize}MB limit.`);
        return;
      }

      setError(null);

      // Add preview for image files
      const newFiles = acceptedFiles.map((file) => {
        if (file.type.startsWith("image/")) {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        }
        return file;
      });

      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onChange(updatedFiles);
    },
    [files, maxFiles, maxSizeBytes, maxSize, maxTotalSizeBytes, maxTotalSize, onChange]
  );


  // Fix TypeScript error by using a proper type assertion
  const removeFile = (index: number) => {
    const newFiles = [...files];
    
    // Revoke the object URL to avoid memory leaks
    const fileWithPreview = newFiles[index] as FileWithPreview;
    if (fileWithPreview.preview) {
      URL.revokeObjectURL(fileWithPreview.preview);
    }
    
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onChange(newFiles);
    setError(null);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    maxFiles,
    maxSize: maxSizeBytes,
    accept: acceptedFileTypes.split(',').reduce((acc: Record<string, string[]>, curr) => {
      // Handle MIME types
      if (curr.includes('/')) {
        const category = curr.split('/')[0];
        if (!acc[category]) acc[category] = [];
        acc[category].push(curr);
      } else {
        // Handle file extensions
        const ext = curr.trim();
        if (ext.startsWith('.')) {
          if (!acc['application']) acc['application'] = [];
          acc['application'].push(ext);
        }
      }
      return acc;
    }, {}),
  });
  
  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return (file as FileWithPreview).preview ? null : <FileText className="h-6 w-6 text-primary" />;
    } else if (file.type.includes("pdf")) {
      return <File className="h-6 w-6 text-red-500" />;
    } else if (file.type.includes("doc") || file.type.includes("word")) {
      return <File className="h-6 w-6 text-blue-500" />;
    } else {
      return <File className="h-6 w-6 text-gray-500" />;
    }
  };

  const fileTypes = acceptedFileTypes
    .split(",")
    .map((type) => type.replace(".", "").toUpperCase())
    .join(", ");

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`w-full border-2 border-dashed rounded-xl p-6 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
          isDragActive
            ? "border-primary bg-primary/5 dark:bg-primary/10"
            : isDragReject
            ? "border-red-500 bg-red-50 dark:bg-red-900/20"
            : "border-accent/50 hover:border-primary/50 hover:bg-primary/5"
        } ${error ? "border-red-500" : ""}`}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
            isDragActive ? "bg-primary/20" : "bg-primary/10"
          }`}>
            <Upload
              className={`h-6 w-6 ${
                isDragActive ? "text-primary" : "text-primary/80"
              }`}
            />
          </div>
          {isDragActive ? (
            <p className="text-sm font-medium text-primary">Drop files here...</p>
          ) : (
            <>
              <p className="text-sm font-medium">
                Drag & drop files or{" "}
                <span className="text-primary">browse</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Supported formats: {fileTypes}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Max {maxFiles} files, total size {maxTotalSize}MB
              </p>
            </>
          )}
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center mt-2 text-sm text-red-500"
        >
          <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {files.length > 0 && (
        <div className="mt-4">
          <AnimatePresence>
            {files.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center p-3 mb-2 bg-card/50 border border-accent/30 rounded-lg group hover:border-primary/50 transition-all"
              >
                <div className="mr-3 flex-shrink-0">
                  {file.type.startsWith("image/") && (file as FileWithPreview).preview ? (
                    <div className="h-10 w-10 rounded-md overflow-hidden bg-accent/10">
                      <Image
                        src={(file as FileWithPreview).preview || ""}
                        alt={file.name}
                        className="h-full w-full object-cover"
                        width={40}
                        height={40}
                      />
                    </div>
                  ) : (
                    <div className="h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center">
                      {getFileIcon(file)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="ml-2 flex-shrink-0 h-7 w-7 rounded-full bg-accent/10 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 flex items-center justify-center transition-colors"
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {files.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between mt-3"
            >
              <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                <Check className="h-3.5 w-3.5 mr-1" />
                <span>{files.length} {files.length === 1 ? 'file' : 'files'} ready to upload</span>
              </div>
              
              <button
                type="button"
                onClick={() => {
                  // Clean up preview URLs
                  files.forEach(file => {
                    if (file.preview) URL.revokeObjectURL(file.preview);
                  });
                  setFiles([]);
                  onChange([]);
                }}
                className="text-xs text-red-500 hover:text-red-700 dark:hover:text-red-400"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}


