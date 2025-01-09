import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import symposium from "@/images/wtl/14_research_symposium.webp";
import Image from "next/image";

export default function Reflection() {
  const text = (
    <>
      <h5>#5</h5>
      <h1>Moving forward</h1>
      <p>The end goal is to develop a working prototype that is economically viable for implementation in the fashion industry.</p>
      <ol>
        <li className="font-bold text-black">
          Incorporating software details
          <p className="pt-0">Further development of augmented intelligence technology with Cornell University.</p>
        </li>
        <li className="font-bold text-black">
          Visual branding
          <p className="pt-0">Color scheme, logo, fonts, etc.</p>
        </li>
      </ol>
    </>
  )

  const imageElement = (
    <Image
      src={symposium}
      alt="Picture of me presenting my team's research paper"
      className="w-5/6 md:w-2/3"
    />
  )

  return (
    <ContentBlock
      content1={text}
      content2={
        <ImageCaption 
          image={imageElement} 
          caption="Representing my team at the College of Design’s annual research symposium!"
        />
      }
      isFlexRow={false}
    ></ContentBlock>
  )
}