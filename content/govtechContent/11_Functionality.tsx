import { FullContentBlock } from "@/components/FullContentBlock";
import designV1 from "@/images/govtech/11_design_v1.webp";
import Image from "next/image";
import { ImageCaption } from "@/components/ImageCaption";

export default function Functionality() {
  const text = (
    <>
      <h1>Functionality</h1>
      <p>We want quantitative and qualitative feedback from users at the lowest feedback processing cost.</p>
    </>
  )

  const imageElement = (
    <Image
      src={designV1}
      alt="UI prototype version 1 combining quantitative and qualitative feedback"
      className="md:w-9/12 md:mx-auto"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={<ImageCaption image={imageElement} caption="Experiment 1: Purely functional pop-up design"/>}
      isFlexRow={false}
    ></FullContentBlock>
  )
}