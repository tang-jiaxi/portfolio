import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import hackathon from "@/images/govtech/19_hackathon.webp";
import Image from "next/image";

export default function Reflection() {
  const text = (
    <>
      <h5>#5</h5>
      <h1>Reflection</h1>
      <p className="mb-0 md:mb-[0.75rem]">I&apos;m incredibly grateful for this opportunity; I never thought that I could explore both fields of Design and Computer Science in one internship.</p>
    </>
  )

  const text2 = (
    <>
      <p>While I&apos;m excited to continue honing my skills, I&apos;m eager to push my limits as an interdisciplinary professional e.g. serve as a communication bridge between the two fields. I cannot wait to explore further!</p>
    </>
  )

  const imageElement = (
    <Image
      src={hackathon}
      alt="Hackathon group picture, second place"
    />
  )

  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <ContentBlock
        content1={text}
      ></ContentBlock>
      <ContentBlock
        content1={text2}
        content2={
          <ImageCaption 
            image={imageElement} 
            caption="Led a team of software engineers + 1 HR intern to victory in our UX-themed intern hackathon!"
          />
        }
        isFlexRow={false}
      ></ContentBlock>
    </section>
  )
}