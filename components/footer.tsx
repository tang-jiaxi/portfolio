import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa'; 
import { Button } from "@/components/ui/button"; 
import Link from 'next/link';
import Image from 'next/image';

const baseUrl = process.env.BASE_URL

export default function Footer() {
  return (
    <div className="w-full px-16 pb-16 bg-white flex flex-row justify-between">

        <Link href={baseUrl || '#'} passHref className="flex justify-center items-center">
          <Image
                src="/images/logo.png" 
                alt="Logo"
                layout="responsive"
                width={1920}
                height={1080}
                loading="lazy"
                className="object-cover max-w-[20vw]"
              />
          <span className="text-2xl font-semibold">Jiaxi Tang</span>
        </Link>

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
        <p className="text-xl font-sans">I hope you enjoyed your visit!</p>
      </div>

      <div className="flex justify-center items-center gap-6">
        <a href="https://www.linkedin.com/in/jiaxi--tang/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-12 h-12" />
        </a>
        <a href="https://github.com/tang-jiaxi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-12 h-12" />
        </a>
        <a href="https://www.behance.net/jiaxi_tang" target="_blank" rel="noopener noreferrer">
          <FaBehance className="w-12 h-12" />
        </a>
        <a href="mailto:jt.jiaxitang@gmail.com">
          <FaEnvelope className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}
