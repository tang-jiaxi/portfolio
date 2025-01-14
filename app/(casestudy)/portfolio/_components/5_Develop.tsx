import { FullContentBlock } from "@/components/FullContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import techStack from "@/images/portfolio/4_tech_stack.webp"
import Image from "next/image";

export default function Develop() {
  const text = (
    <>
      <h5>#3</h5>
      <h1>Develop!</h1>
      <p>I branched off my most familiar framework, React.JS, and picked up Next.JS, Tailwind CSS in this process.</p>
    </>
  )

  const imageElement = (
    <ImageCaption 
      image={
        <Image
          src={techStack}
          alt="Tech stack: React, Next.js, Tailwind CSS, Typescript, Javascript, ShadCN UI, Matter.js"
        />
      }
      caption="Tech stack: React, Next.js, Tailwind CSS, Typescript, Javascript, ShadCN UI, Matter.js"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullComponent={imageElement}
      isFlexRow={false}
    ></FullContentBlock>
  )
}