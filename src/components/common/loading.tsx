"use client";

import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-50 h-50">
        <DotLottieReact
          src="/lotties/loading.json"
          loop
          autoplay
        />
      </div>
    </div>
  );
} 