import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import reactPlanning from "@/images/govtech/18_react_planning.webp";
import Image from "next/image";

export default function InterdisiplinaryInsights() {
  const text = (
    <>
      <h1>Interdisciplinary insights & more</h1>
      <p>Contact me via&nbsp;
        <a href="mailto:jt.jiaxitang@gmail.com" style={{textDecoration: "underline", font: "inherit"}}>
          jt.jiaxitang@gmail.com
        </a> 
        &nbsp;to find out about details such as feature design case studies!
      </p>
    </>
  )

  const imageElement = (
    <Image
      src={reactPlanning}
      alt="Overview of activities I did during my internship"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={<ImageCaption image={imageElement} caption="Sneak peek of me planning a React component in Figma"/>}
    ></ContentBlock>
  )
}