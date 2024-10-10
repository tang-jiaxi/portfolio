import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CaseNavigationProps {
  index: number;
}
const buttonClasses = "hover:bg-transparent hover:text-inherit hover:no-underline focus:bg-transparent focus:text-inherit active:bg-transparent active:text-inherit"

export default function CaseNavigation({ index }: CaseNavigationProps) {
  
  const links = [
    "/govtech",
    "/wtl",
    "/radioK",
    "/sase",
    "/wam",
  ];

  const prevLink = index > 0 ? links[index - 1] : links[links.length - 1]; // Loop to the last if on the first
  const nextLink = index < links.length - 1 ? links[index + 1] : links[0]; // Loop to the first if on the last

  return (
    <div className="flex justify-between items-center border border-black rounded-full px-2 sm:px-6 py-3 mx-auto w-[90vw] md:w-[57vw] lg:w-[38vw]">
      {/* Prev Case Button */}
      <Link href={prevLink} passHref className="hover:bg-transparent">
        <Button variant="ghost">
          <span className="mr-2 font-dm-sans">←</span>
          Prev case
        </Button>
      </Link>

      {/* Center Text */}
      <p className="hidden md:flex font-semibold text-center font-sans text-xl whitespace-nowrap">
        Thanks for watching!
      </p>

      {/* Next Case Button */}
      <Link href={nextLink} passHref>
        <Button variant="ghost"className="hover:bg-transparent">
          Next case
          <span className="ml-2 font-dm-sans">→</span>
        </Button>
      </Link>
    </div>
  );
}
