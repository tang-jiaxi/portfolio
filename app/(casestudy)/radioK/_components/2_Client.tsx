import { ContentBlock } from "@/components/ContentBlock";
import logos from "@/images/radioK/2_logos.webp"
import Image from "next/image";

export default function Client() {
  const text = (
    <>
    <h1>Client Background:<br></br>Real College Podcast by RadioK</h1>
    <p>Real College Podcast (RCP) is a Minneapolis-themed arts and cultural podcast hosted by the University of Minnesota’s college radio station, RadioK. </p>
    </>
  )

  const imageElement = (
    <Image
      src={logos}
      alt="Real College Podcast and RadioK logos"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
      isFlexRow={false}
    ></ContentBlock>
  )
}