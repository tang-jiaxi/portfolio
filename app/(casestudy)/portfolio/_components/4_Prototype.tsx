import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import components from "@/images/portfolio/3_components.webp"
import prototype from "@/images/portfolio/3_prototype.webp"
import Image from "next/image";

export default function Prototype() {

  const text = (
    <>
      <h5>#2</h5>
      <h1>Prototyping in Figma...</h1>
      <p>I adopted a 12 column grid system and used variants to explore UI styles. Got lots of feedback from my UX professor too!</p>
    </>
  )
  
  const image1 = (
    <Image
      src={prototype}
      alt="Laying out my case studies"
    />
  )

  const image2 = (
    <Image
      src={components}
      alt="UI components that I experimented with"
    />
  )

  return (
    <ContentWrapper>
      <ContentBlock 
        content1={text}
        isFlexRow={false}
      />
      {image1}
      {image2}
    </ContentWrapper>
  )
}