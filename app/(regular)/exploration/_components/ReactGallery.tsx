"use client"
import React from 'react';
import "react-photo-album/rows.css";
import { Skeleton } from '@/components/ui/skeleton';
import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

// const CardSkeleton =  (
//   <div className='flex flex-col p-15 gap-0'>
//     <Skeleton className='w-auto aspect-[3:4] min-h-[400px]'></Skeleton>
//     <Skeleton className='mt-4 w-4/5 h-4'></Skeleton>
//     <Skeleton className='mt-2 w-3/5 h-4'></Skeleton>
//   </div>
// )

// const GallerySkeleton = (
//   <div className='flex flex-row flex-wrap gap-8'>
//     {CardSkeleton}
//     {CardSkeleton}
//     {CardSkeleton}
//   </div>
// )

const ReactGallery = () => {
  const photos = [
    { src: "/videos/gallery/calendar_view.gif",
      alt: "Figma prototype screen recording",
      title: "Multi-calendar View",
      subtitle: "Mobile app 'Bleisure Travel'",
      width: 654,
      height: 1266,
    },
    { src: "/images/gallery/turning_red.webp",
      alt: "Movie poster",
      title: "Movie Poster",
      subtitle: "Disney 'Turning Red'",
      width: 1400,
      height: 1976
    },
    { src: "/videos/gallery/live_vote.gif",
      alt: "Figma prototype screen recording",
      title: "Live Vote",
      subtitle: "Mobile app 'Bleisure Travel'",
      width: 654,
      height: 1266
    },
    { src: "/images/gallery/bag.webp",
      alt: "To-go bag mockup",
      title: "To-go Bag",
      subtitle: "Malaysian restaurant branding",
      width: 3000,
      height: 4500
    },
    { src: "/videos/gallery/add_activity.gif",
      alt: "Figma prototype screen recording",
      title: "Adding activity to calendar",
      subtitle: "Mobile app 'Bleisure Travel'",
      width: 654,
      height: 1266
    },
    { src: "/images/gallery/banana_leaf.webp",
      alt: "Banana leaf packaging mockup",
      title: "Banana Leaf Packaging",
      subtitle: "Malaysian restaurant branding",
      width: 1400,
      height: 1866
    },
    { src: "/videos/gallery/explore.gif",
      alt: "Figma prototype screen recording",
      title: "Explore Page & Favorites",
      subtitle: "Mobile app 'Bleisure Travel'",
      width: 654,
      height: 1266
    },
    { src: "/images/gallery/apple_watch_mockup.webp",
      alt: "App advertisement",
      title: "Advertisement",
      subtitle: "Apple watch app 'Awkwardly Social'",
      width: 1920,
      height: 1080
    },
    { src: "/videos/gallery/onboarding.gif",
      alt: "Figma prototype screen recording",
      title: "Onboarding",
      subtitle: "Apple watch app 'Awkwardly Social'",
      width: 788,
      height: 952
    },
    { src: "/videos/gallery/flashcard.gif",
      alt: "Figma prototype screen recording",
      title: "View Flashcards",
      subtitle: "Apple watch app 'Awkwardly Social'",
      width: 788,
      height: 952
    },
    { src: "/images/gallery/hotpot.webp",
      alt: "Movie poster",
      title: "Logo",
      subtitle: "Hotpot restaurant branding",
      width: 1400,
      height: 1050
    }
  ];

  return (
    <RowsPhotoAlbum
      photos={photos}
      render={{ 
        image: renderNextImage,
        extras: (_, { index }) =>
          <div>
            <small className="text-black font-bold mt-4">{photos[index].title}</small>
            <small className="text-black">{photos[index].subtitle}</small>
          </div>,
       }}
      spacing={32}
      padding={60}
      rowConstraints={{ minPhotos: 1, maxPhotos: 3, singleRowMaxHeight: 600 }}
      targetRowHeight={400}
      skeleton={<Skeleton className='w-full h-[150vh] rounded-3xl'/>}
    ></RowsPhotoAlbum>
  );
};

export default ReactGallery;