import { Badge } from "@/components/ui/badge";

interface TagProps {
  isSelected?: boolean;
}

export function UxTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 lg:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
      <p className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > UI/UX Design </p>  
    </Badge>
  );
}

export function CsTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 md:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
      <p
        className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Programming </p>
    </Badge>
  );
}

export function GdesTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 md:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
      <p
        className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Graphic Design </p>
    </Badge>
  );
}

export function ShowAllTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 md:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <p
        className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Show All </p>
    </Badge>
  );
}

export function ClientTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 md:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <p
        className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Client </p>
    </Badge>
  );
}

export function WorkTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 md:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <p
        className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Work </p>
    </Badge>
  );
}

export function SchoolTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-3 md:px-4 py-1 md:py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <p
        className={`whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > School </p>
    </Badge>
  );
}