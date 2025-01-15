import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import studying from "@/images/wam/studying.webp";
import Image from "next/image";

export default function Reflection() {
  const text = (
    <>
      <h5>#4</h5>
      <h1>Moving forward</h1>
      <p>It takes more than a poster to change Weisman’s position in the student body.</p>
      <p className="mb-0">A series of coordinated efforts ranging from</p>
      <ul>
        <li>social media marketing</li>
        <li>collaborating with student groups to host events</li>
        <li>putting up more posters</li>
      </ul>
      <p>would be required to truly revitalize Weisman.</p>
    </>
  )

  const imageElement = (
    <Image
      src={studying}
      alt="Studying at Weisman"
      className="w-5/6 md:w-2/3"
    />
  )

  return (
    <ContentBlock
      content1={text}
      content2={
        <ImageCaption 
          image={imageElement} 
          caption="Studying in Weisman"
        />
      }
      isFlexRow={false}
    ></ContentBlock>
  )
}