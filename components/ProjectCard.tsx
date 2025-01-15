import Image, { StaticImageData } from 'next/image'; 
import Link from 'next/link';
import CardSkeleton from './CardSkeleton';
import { Suspense } from 'react';

interface ProjectCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  bgColor: string;
  title: string;
  tags: React.ReactNode[]; 
  hashtags: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt, bgColor, title, tags, hashtags, link }) => {
  return (
  <Suspense fallback={<CardSkeleton/>}>
    <Link href={link} passHref className="border-b border-black">
      <div className="block focus:outline-none transition duration-150 ease-in-out">
        <div className="mx-auto w-[92vw] lg:w-[70vw] p-0 rounded-[30px] overflow-hidden border border-black hover:bg-gray-100 bg-white">
          <div className="relative w-full overflow-hidden" style={{ backgroundColor: bgColor }}>
            <Image 
              src={imageSrc} 
              alt={imageAlt}
              className="object-cover object-center"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col px-4 pt-4 pb-6 md:px-8 lg:pb-10 max-w-full border-t border-black">
            {/* Text*/}
            <div className="flex flex-col md:flex-row flex-nowrap justify-between">
      
              <h2 className="mb-3 md:mb-0 md:w-2/5 text-black">
                {title}
              </h2>

              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-start md:justify-end">
                  {tags}
                </div>
                <div className="flex flex-wrap gap-x-2 md:gap-x-4 justify-start md:justify-end text-gray-500">
                  {hashtags.map((hashtag, index) => (
                    <h3 key={index}>{hashtag}</h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </Suspense>
  );
};

export default ProjectCard;