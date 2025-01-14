import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ImageCaption } from "@/components/ImageCaption";
import data from "@/images/wtl/9_ui_process.webp";
import Image from "next/image";

export default function UIDesign() {
  const text = (
    <>
      <h5>#3</h5>
      <h1>UI Design Process</h1>
      <p>My background lies in UX/Graphic Design, while my team specialized in Fashion Design. We knew what the app should do, but had no clue how it could all work together.</p>
    </>
  )

  const imageElement = (
    <Image
      src={data}
      alt="UI design process flowchart"
      className="w-1/2 md:w-full"
    />
  )

  return (
    <ContentWrapper>
      <ContentBlock
        content1={text}
      ></ContentBlock>
      <ContentBlock
        content1={<ImageCaption
          image={imageElement}
          caption="Iterative design process"
        ></ImageCaption>}
      ></ContentBlock>
    </ContentWrapper>
  )
}