import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CaseNavigationProps {
  index: number;
}

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
    <div className="flex justify-between items-center border border-black rounded-full px-6 py-3 w-[40vw] mx-auto">
      {/* Prev Case Button */}
      <Link href={prevLink} passHref>
        <Button variant="ghost">
          <span className="mr-2 font-dm-sans">←</span>
          Prev case
        </Button>
      </Link>

      {/* Center Text */}
      <p className="font-semibold text-center font-sans text-xl whitespace-nowrap">
        Thanks for watching!
      </p>

      {/* Next Case Button */}
      <Link href={nextLink} passHref>
        <Button variant="ghost">
          Next case
          <span className="ml-2 font-dm-sans">→</span>
        </Button>
      </Link>
    </div>
  );
}
