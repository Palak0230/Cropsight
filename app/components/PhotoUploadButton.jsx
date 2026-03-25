'use client';

import { useState } from 'react';

export default function PhotoUploadButton() {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      // Mock upload - replace with actual API call
      setTimeout(() => {
        setUploading(false);
        alert(`File uploaded: ${file.name}`);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label 
        htmlFor="photo-upload"
        className="relative group cursor-pointer"
      >
        <div className="w-32 h-32 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105 animate-pulse">
          <svg 
            className="w-16 h-16 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </div>
        <input
          id="photo-upload"
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <p className="text-xl font-semibold text-gray-800">
        {uploading ? 'Analyzing...' : 'Scan Your Crops'}
      </p>
      <p className="text-sm text-gray-600">
        Upload a photo for instant disease detection
      </p>
    </div>
  );
}
