import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Import components from Shadcn UI
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import { Button } from "@/components/ui/button"; // Ensure AvatarImage is imported correctly
import Link from 'next/link';

const baseUrl = process.env.BASE_URL

export default function Footer() {
  return (
    <div className="w-full px-16 py-6 bg-white flex flex-row justify-between">

      <nav className="flex justify-between items-center p-4">
        <Link href={baseUrl || '#'} passHref className="flex justify-center items-center space-x-2">
          <Avatar className="w-48 h-auto">
            <AvatarImage src="images/logo.png" alt="Logo"/>
          </Avatar>
          <span className="text-2xl font-semibold">Jiaxi Tang</span>
        </Link>
      </nav>

      <div className="flex flex-col">
        <nav className="flex flex-col text-sm">
          <Button variant="ghost" className="hover:bg-transparent hover:underline font-sans">Home</Button>
          <Button variant="ghost" className="hover:bg-transparent hover:underline">UI/UX</Button>
          <Button variant="ghost" className="hover:bg-transparent hover:underline">Coding</Button>
          <Button variant="ghost" className="hover:bg-transparent hover:underline">Graphics</Button>
          <Button variant="ghost" className="hover:bg-transparent hover:underline">Resume</Button>
        </nav>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-4xl font-sans font-normal">I hope you enjoyed your visit!</p>
      </div>

      <div className="flex justify-center items-center gap-8">
        <a href="https://www.linkedin.com/in/jiaxi--tang/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-16 h-16" />
        </a>
        <a href="https://github.com/tang-jiaxi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-16 h-16" />
        </a>
        <a href="https://www.behance.net/jiaxi_tang" target="_blank" rel="noopener noreferrer">
          <FaBehance className="w-16 h-16" />
        </a>
        <a href="mailto:jt.jiaxitang@gmail.com">
          <FaEnvelope className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}
