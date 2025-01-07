import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import firstPr from "@/images/govtech/17_first_pr.webp";
import finalPr from "@/images/govtech/17_final_pr.webp";
import Image from "next/image";

export default function SlowlyProgressInDifficulty() {
  const text = (
    <>
      <h1>Slowly Progressed In Difficulty</h1>
      <p>To familiarize with the codebase/tech stack:</p>
      <ul>
        <li>Started with simple bug fixes</li>
        <li>Extended existing features</li>
        <li>Finally building my own feature</li>
      </ul>
    </>
  )

  const image1 = (
    <Image
      src={firstPr}
      alt="First pull request!"
    />
  )

  const image2 = (
    <Image
      src={finalPr}
      alt="First pull request!"
    />
  )


  const imageComponent = (
    <div className="flex flex-col gap-2 md:gap-4">
      <ImageCaption image={image1} caption="First pull request!"/>
      <ImageCaption image={image2} caption="Final feature built from scratch"/>
    </div>
  )

  return (
    <ContentBlock
      content1={text}
      content2={imageComponent}
      isFlexRow={false}
    ></ContentBlock>
  )
}