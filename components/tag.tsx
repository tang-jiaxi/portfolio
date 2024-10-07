import { Badge } from "@/components/ui/badge";

interface TagProps {
  isSelected?: boolean;
}

export function UxTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > UI/UX Design </span>
    </Badge>
  );
}

export function CsTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Computer Science </span>
    </Badge>
  );
}

export function GdesTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Graphic Design </span>
    </Badge>
  );
}

export function ShowAllTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Show All </span>
    </Badge>
  );
}

export function ClientTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Client </span>
    </Badge>
  );
}

export function WorkTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > Work </span>
    </Badge>
  );
}

export function SchoolTag({ isSelected }: TagProps) {
  return (
    <Badge
      className={`inline-flex items-center border border-black rounded-full px-4 py-2 ${
        isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
      }`}
    >
      <span
        className={`text-lg font-sans font-normal whitespace-nowrap ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      > School </span>
    </Badge>
  );
}