import { FullContentBlock } from "@/components/FullContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import stickNotes from "@/images/radioK/17_sticky_notes.webp"
import Image from "next/image";

export default function Prototype() {
  const text = (
    <>
      <h5>#3.2</h5>
      <h1>Rapid Prototyping</h1>
      <p>Quick sketches and testing of prototypes with club members</p>
    </>
  )

  const imageElement = (
    <Image
      src={stickNotes}
      alt="User testing feedback"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={<ImageCaption image={imageElement} caption="User testing feedback"/>}
      isFullWidth
    ></FullContentBlock>
  )
}