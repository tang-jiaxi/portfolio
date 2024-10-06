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

const baseUrl = "http://localhost:3000";

export const ProjectsArray = [
  {
    imageSrc: '/images/govtechCover.png',
    title: 'UI/UX Design Internship',
    tags: ['UX', 'CS', 'GDES'],
    hashtags: ['#Stuff1', '#Stuff2'],
    link: `${baseUrl}/wtl`
  },
  {
    imageSrc: '/images/govtechCover.png',
    title: 'Another Project',
    tags: ['GDES'],
    hashtags: ['#DifferentStuff'],
    link: `${baseUrl}/wtl`
  },
];

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, tags, hashtags, link }) => {
  return (
    <div className="flex justify-center">
      <Link href={link} passHref>
        <div className="block focus:outline-none transition duration-150 ease-in-out">
          <Card className="w-[50vw] p-0 rounded-[50px] overflow-hidden border-black hover:bg-gray-100">
            <div className="relative w-full h-[25vw] border-b border-black">
              <Image 
                src={imageSrc} 
                alt="Main header image"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex flex-col gap-4 px-16 pt-8 pb-12 border-black">
              {/* Text and Badges */}
              <div className="flex flex-row flex-nowrap justify-between gap-2">
                <h2 className="text-[48px] w-2/5 font-sans">{title}</h2>
                <div className="space-x-2 flex flex-col gap-6">
                  <div className="flex flex-row gap-2 justify-end">
                    {tags}
                  </div>
                  <div className="flex flex-row gap-4 justify-end text-gray-500">
                    {hashtags.map((hashtag, index) => (
                      <p key={index} className="font-sans align-center text-grey-500">
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