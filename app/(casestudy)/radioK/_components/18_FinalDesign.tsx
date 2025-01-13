import { FullContentBlock } from "@/components/FullContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import finalDesign from "@/images/radioK/18_finalDesign.webp"
import Image from "next/image";

export default function FinalDesign() {
  const text = (
    <>
      <h1>Final Design</h1>
      <p>Each design decision is backed by user research and user journey insights (as labeled on the image).</p>
    </>
  )

  const imageElement = (
    <Image
      src={finalDesign}
      alt="Final Design"
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