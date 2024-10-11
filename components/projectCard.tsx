import Image from 'next/image'; 
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"; 

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  tags: React.ReactNode[]; // You can use React components as tags
  hashtags: string[];
  link: string;
}

export const ProjectsArray = [
  {
    imageSrc: '/images/govtechCover.png',
    title: 'UI/UX Design Internship',
    tags: ['UX', 'CS', 'Work'],
    hashtags: ['#Figma', '#UserTesting', '#UserInterview', '#React', '#TypeScript', '#JavaScript'],
    link: `/govtech`
  },
  {
    imageSrc: '/images/wtlCover.png',
    title: 'Fashion Designer App Design',
    tags: ['UX', 'Work'],
    hashtags: ['#Figma', '#Illustrator', '#Research', '#CrossUniversity'],
    link: `/wtl`
  },
  {
    imageSrc: '/images/radioKCover.png',
    title: 'Podcast Website Redesign',
    tags: ['UX', 'Client'],
    hashtags: ['#Figma', '#UserPersona', '#UserJourney'],
    link: `/radioK`
  },
  {
    imageSrc: '/images/portfolioCover.png',
    title: 'Portfolio Website',
    tags: ['CS', 'UX'],
    hashtags: ['#React', '#Next.js', '#TailWindCSS', '#ShadCn', '#Matter.js'],
    link: `/portfolio`
  },
  {
    imageSrc: '/images/saseCover.png',
    title: 'Resume Database Website',
    tags: ['CS', 'School'],
    hashtags: ['#React', '#TypeScript', '#JavaScript', '#ChakraUI'],
    link: `/sase`
  },
  {
    imageSrc: '/images/wamCover.png',
    title: 'Poster Design',
    tags: ['UX', 'GDES', 'Client'],
    hashtags: ['#Illustrator', '#UserSurvey', '#UserInterview'],
    link: `/wam`
  },
];

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, tags, hashtags, link }) => {
  return (
    <div className="flex justify-center">
      <Link href={link} passHref>
        <div className="block focus:outline-none transition duration-150 ease-in-out">
          <Card className="w-[90vw] lg:w-[70vw] p-0 rounded-[50px] overflow-hidden border-black hover:bg-gray-100">
            <div className="relative w-full max-h-[70vh] border-b border-black overflow-hidden">
              <Image 
                src={imageSrc} 
                alt="Main header image"
                width={1920}
                height={1080}
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <CardContent className="flex flex-col gap-4 px-4 lg:px-12 pt-8 pb-10 lg:pb-12 border-black max-w-full">
              {/* Text and Badges */}
              <div className="flex flex-col md:flex-row flex-nowrap justify-between gap-2">
                <h2 className="text-2xl md:text-4xl mr-4 mb-3 md:mr-0 md:mb-0 md:w-2/5 font-dm-sans">{title}</h2>
                <div className="space-x-2 flex flex-col gap-6">
                  <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-start md:justify-end">
                    {tags}
                  </div>
                  <div className="flex flex-wrap lg:flex-nowrap gap-2 md:gap-4 justify-start md:justify-end text-gray-500">
                    {hashtags.map((hashtag, index) => (
                      <p key={index} className="font-sans align-center text-grey-500 text-sm">
                        {hashtag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;