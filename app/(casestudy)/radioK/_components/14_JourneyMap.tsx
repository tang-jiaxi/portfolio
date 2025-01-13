import { FullContentBlock } from "@/components/FullContentBlock";
import journeyMap from "@/images/radioK/14_journey_map.webp"
import Image from "next/image";

export default function JourneyMap() {
  const text = (
    <>
      <h1>Alex&apos;s Journey Map in RadioK&apos;s Website</h1>
    </>
  )

  const imageElement = (
    <Image
      src={journeyMap}
      alt="Alex journey map of finding and opening the podcast"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={imageElement}
      isFullWidth
    ></FullContentBlock>
  )
}