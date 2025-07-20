"use client";

import { useState, useEffect } from "react";
import type { FC } from "react";

interface ImageGalleryProps {
  images: string[];
  mainImageHeight?: string;
  mainImageWidth?: string; // New prop
  thumbnailHeight?: string;
  thumbnailWidth?: string; // New prop
  isLoading?: boolean;
  thumbnailCount?: number; // Number of skeleton thumbnails to show
}

export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  mainImageHeight = "aspect-[4/3]",
  mainImageWidth = "w-full", // Default value
  thumbnailHeight = "h-24",
  thumbnailWidth = "w-24", // Default value
  isLoading = false,
  thumbnailCount = 4, // Default number of skeleton thumbnails
}) => {
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  if (isLoading) {
    return (
      <div className="mt-4">
        {/* Main Image Skeleton */}
        <div
          className={`${mainImageHeight} ${mainImageWidth} bg-gray-200 rounded-lg mb-4 animate-pulse`}
        />

        {/* Thumbnails Skeleton */}
        <div className="flex gap-4 overflow-x-auto">
          {[...Array(thumbnailCount)].map((_, index) => (
            <div
              key={index}
              className={`${thumbnailHeight} ${thumbnailWidth} bg-gray-200 rounded-lg animate-pulse`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {/* Main Image */}
      <div
        className={`${mainImageHeight} ${mainImageWidth} bg-gray-200 rounded-lg mb-4 overflow-hidden`}
      >
        <img
          src={mainImage}
          alt="Main vendor image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`${thumbnailHeight} ${thumbnailWidth} bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 ${
              mainImage === image ? "ring-2" : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
