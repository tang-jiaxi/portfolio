"use client"
import Image from 'next/image';
import React from 'react';

interface CasestudyImagesProps {
  mediaItems?: string[]; 
  imageDir: string; 
}

const CasestudyImages: React.FC<CasestudyImagesProps> = ({ mediaItems, imageDir }) => {

  const defaultImages = [
    'row-1-column-1.png',
    'row-2-column-1.png',
    'row-3-column-1.png',
    'row-4-column-1.png',
    'row-5-column-1.png',
    'row-6-column-1.png',
    'row-7-column-1.png',
    'row-8-column-1.png',
    'row-9-column-1.png',
    'row-10-column-1.png',
    'row-11-column-1.png',
    'row-12-column-1.png',
    'row-13-column-1.png',
    'row-14-column-1.png',
    'row-15-column-1.png',
    'row-16-column-1.png',
  ];
  const mediaToRender = mediaItems || defaultImages;

  return (
    <div className="flex flex-col gap-0 w-full z-10 pt-[12vh] pb-[20vh]">
      {/* Iterate over media items and render images or videos based on file extension */}
      {mediaToRender.map((item, index) => (
        <React.Fragment key={index}>
          {/* Check if the item is an image by looking for .png, .jpg, .jpeg, etc. */}
          {item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg') ? (
            <div className="relative w-[95vw] h-auto mx-auto">
              <Image
                src={`/images/${imageDir}/${item}`} 
                alt={`Media item ${index + 1}`}
                width={1920}
                height={1080}
                loading="lazy"
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-[76vw] h-auto mx-auto">
              <video
                width="100%"
                height="500px"
                controls
                muted
                autoPlay
                loop
              >
                <source
                  src={`/videos/${imageDir}/${item}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CasestudyImages;
