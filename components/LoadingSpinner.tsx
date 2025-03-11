"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering until mounted on the client

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white space-y-8">
      {/* Logo with Glowing Effect */}
      <div className="relative">
        <Image
          src="/images/luxora.png"
          width={200}
          height={200}
          alt="Luxora Logo"
          className="rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        />
        <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-20"></div>
      </div>

      {/* Spinner Animation */}
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-red-600"></div>
        <div className="absolute animate-pulse rounded-full h-16 w-16 bg-red-600"></div>
      </div>

      {/* Loading Text */}
      <p className="text-lg font-playfair animate-pulse">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
