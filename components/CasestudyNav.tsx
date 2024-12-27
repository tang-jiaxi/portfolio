import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";

interface CaseNavigationProps {
  index: number;
}

export default function CaseNavigation({ index }: CaseNavigationProps) {
  
  const links = [
    "/govtech",
    "/wtl",
    "/radioK",
    "/portfolio",
    "/sase",  
    "/wam",
  ];

  const prevLink = index > 0 ? links[index - 1] : links[links.length - 1]; 
  const nextLink = index < links.length - 1 ? links[index + 1] : links[0]; 

  return (
    <div className="flex justify-between items-center border border-black rounded-full px-2 sm:px-6 py-3 max-[274px]:py-1 mx-auto w-[90vw] md:w-[66vw] lg:w-[50vw]">
      {/* Prev Case Button */}
      <Link href={prevLink}>
        <Button variant="ghost" className="hover:bg-transparent flex gap-x-2 gap-y-0 max-[274px]:flex-wrap-reverse max-[274px]:min-h-fit">
          <HiOutlineArrowLeft className="mt-0.5"></HiOutlineArrowLeft>
          Prev case
        </Button>
      </Link>

      {/* Center Text */}
      <p className="hidden sm:flex font-semibold text-center text-xl whitespace-nowrap">
        Thanks for watching!
      </p>

      {/* Next Case Button */}
      <Link href={nextLink}>
        <Button variant="ghost" className="hover:bg-transparent flex gap-x-2 gap-y-0 max-[274px]:flex-wrap max-[274px]:min-h-fit">
          Next case
          <HiOutlineArrowRight className="mt-0.5"></HiOutlineArrowRight>
        </Button>
      </Link>
    </div>
  );
}
