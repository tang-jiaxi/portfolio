import { ContentWrapper } from "@/components/ContentWrapper";
import { HiArrowLongDown } from "react-icons/hi2";

export default function Hypothesis() {
  return (
    <ContentWrapper isBigGap={false}>
      <h1>Hypothesis</h1>
      <div className="flex flex-col w-fit h-full">
        <p className="text-center p-3 rounded-2xl md:basis-1/4 border border-[#7A757C] h-full flex-grow">If designers understood consumers better...</p>
        <HiArrowLongDown fill="#7A757C" className="self-center mt-0.5 size-6 md:size-8"/>
        <p className="text-center p-3 rounded-2xl md:basis-1/4 border border-[#7A757C] h-full flex-grow">Designers will produce garments of higher ultility value</p>
        <HiArrowLongDown fill="#7A757C" className="self-center mt-0.5 size-6 md:size-8"/>
        <p className="text-center p-3 rounded-2xl md:basis-1/4 border border-[#7A757C] h-full flex-grow">Consumers will keep the garments & not throw them away</p>
        <HiArrowLongDown fill="#7A757C" className="self-center mt-0.5 size-6 md:size-8"/>
        <p className="text-center p-3 rounded-2xl md:basis-1/4 border border-[#7A757C] h-full flex-grow">Less waste produced!</p>
      </div>
    </ContentWrapper>
  )
}
