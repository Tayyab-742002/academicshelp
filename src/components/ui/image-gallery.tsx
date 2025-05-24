"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ExternalLink } from "lucide-react";

type ImageItem = {
  id: string | number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  category?: string;
  title?: string;
  description?: string;
};

export function ImageGallery({
  images,
  masonry = true,
  columns = 3,
  gap = 16,
  withFilters = true,
  withSearch = false,
}: {
  images: ImageItem[];
  masonry?: boolean;
  columns?: 2 | 3 | 4;
  gap?: number;
  withFilters?: boolean;
  withSearch?: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredImages, setFilteredImages] = useState<ImageItem[]>(images);
  const [searchTerm, setSearchTerm] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Extract unique categories
  useEffect(() => {
    if (images.length > 0) {
      const uniqueCategories = Array.from(
        new Set(images.filter(img => img.category).map(img => img.category!))
      );
      setCategories(["all", ...uniqueCategories]);
    }
  }, [images]);

  // Filter images based on category and search term
  useEffect(() => {
    let filtered = images;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        image => 
          (image.title && image.title.toLowerCase().includes(term)) ||
          (image.alt && image.alt.toLowerCase().includes(term)) ||
          (image.description && image.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredImages(filtered);
  }, [images, selectedCategory, searchTerm]);

  // Open lightbox
  const openLightbox = (image: ImageItem) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = ""; // Restore scrolling
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === "next") {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, navigateImage]);

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      navigateImage("next");
    } else if (isRightSwipe) {
      navigateImage("prev");
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Download image
  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename || "image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Define column width based on the number of columns
  const getColumnWidth = () => {
    switch (columns) {
      case 2:
        return "w-1/2";
      case 3:
        return "w-1/3";
      case 4:
        return "w-1/4";
      default:
        return "w-1/3";
    }
  };

  // Masonry layout calculation
  const getMasonryColumns = () => {
    const result: ImageItem[][] = Array.from({ length: columns }, () => []);
    
    filteredImages.forEach((image, index) => {
      const columnIndex = index % columns;
      result[columnIndex].push(image);
    });
    
    return result;
  };

  // Masonry columns
  const masonryColumns = getMasonryColumns();

  return (
    <div className="w-full">
      {/* Filters and search */}
      {(withFilters || withSearch) && (
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category filters */}
          {withFilters && categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          )}
          
          {/* Search */}
          {withSearch && (
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-primary/20 bg-card/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Gallery - Masonry layout */}
      {masonry && (
        <div className="flex -mx-2">
          {masonryColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`px-2 ${getColumnWidth()}`}
              style={{ paddingLeft: gap / 2, paddingRight: gap / 2 }}
            >
              <div className="flex flex-col space-y-4" style={{ gap }}>
                {column.map((image) => (
                  <motion.div
                    key={image.id}
                    className="relative overflow-hidden rounded-xl group cursor-pointer bg-card/70 backdrop-blur-sm border border-primary/10 dark:border-primary/20 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative aspect-auto overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width || 500}
                        height={image.height || 500}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay with info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        {image.title && (
                          <h3 className="text-white font-medium">{image.title}</h3>
                        )}
                        {image.description && (
                          <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                        )}
                      </div>
                      {/* Zoom icon */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Gallery - Grid layout */}
      {!masonry && (
        <div 
          className="grid gap-4" 
          style={{ 
            gap,
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` 
          }}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer bg-card/70 backdrop-blur-sm border border-primary/10 dark:border-primary/20 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  {image.title && (
                    <h3 className="text-white font-medium">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  )}
                </div>
                {/* Zoom icon */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className="p-8 text-center bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm">
          <div className="text-2xl font-bold text-foreground mb-2">No images found</div>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchTerm("");
            }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            Reset filters
          </button>
        </div>
      )}
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white z-10 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white z-10 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image content */}
            <motion.div
              className="relative max-w-4xl max-h-full w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Image container */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[calc(100vh-150px)] object-contain"
                  quality={90}
                  priority
                />
              </div>
              
              {/* Image info footer */}
              <div className="p-4 bg-black/70 backdrop-blur-sm text-white">
                <div className="flex justify-between items-center">
                  <div>
                    {selectedImage.title && (
                      <h3 className="font-medium text-lg">{selectedImage.title}</h3>
                    )}
                    {selectedImage.description && (
                      <p className="text-gray-300 text-sm">{selectedImage.description}</p>
                    )}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={() => downloadImage(selectedImage.src, selectedImage.title || selectedImage.alt)}
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={() => window.open(selectedImage.src, "_blank")}
                      title="Open in new tab"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Navigation counter */}
                <div className="text-center text-sm text-gray-400 mt-2">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </div>
              </div>
            </motion.div>
            
            {/* Swipe instruction for mobile */}
            <div className="absolute bottom-32 left-0 right-0 text-center text-gray-400 text-sm md:hidden">
              Swipe to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ImageGallery; 