import { Badge } from "@/components/ui/badge";

interface TagProps {
  isSelected?: boolean;
  tag: string;
}

export default function Tag({ isSelected, tag }: TagProps) {
  const getTag = (tag: string) => {
    switch (tag) {
      case "UX":
        return { color: "bg-red-500", text: "UI/UX Design" };
      case "CS":
        return { color: "bg-blue-500", text: "Programming" };
      case "GDES":
        return { color: "bg-yellow-500", text: "Graphic Design" };
      case "ShowAll":
        return { color: "", text: "Show All" };
      case "Client":
        return { color: "", text: "Client" };
      case "Work":
        return { color: "", text: "Work" };
      case "School":
        return { color: "", text: "School" };
      case "Personal":
        return { color: "", text: "Personal" };
      default:
        return { color: "", text: "" };
    }
  };

  const { color, text } = getTag(tag);

  return (
    <Badge
    className={`inline-flex items-center border border-black rounded-full px-3 lg:px-4 py-2 md:py-2.5 ${
      isSelected ? 'bg-black hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
    }`}
    >
    {color && <span className={`w-3 h-3 ${color} rounded-full mr-2`}></span>}
    <p className={`whitespace-nowrap mt-0 mb-0.5 md:text-[1.1rem] 2xl:text-[1vw] leading-none ${
        isSelected ? 'text-white' : 'text-black'
      }`}
    > {text} </p>  
  </Badge>
  );
}