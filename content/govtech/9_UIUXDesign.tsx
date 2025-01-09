import { ContentBlock } from "@/components/ContentBlock";
import decisionMatrix from "@/images/govtech/9_decision_matrix.webp";
import iterativeDesign from "@/images/govtech/9_iterative_design.webp";
import Image from "next/image";
import { ImageCaption } from "@/components/ImageCaption";

export default function UIUXDesign() {
  const image1 = (
    <Image
      src={decisionMatrix}
      alt="Matrix to make design decisions"
      className="w-2/3 mx-auto"
    />
  )

  const image2 = (
    <Image
      src={iterativeDesign}
      alt="Iterative design process flowchart"
    />
  )

  return (
    <section>
      <h5>#3</h5>
      <h1>UI/UX Design</h1>
      <p className="w-full md:w-1/2 mb-4 md:mb-10">As the only designer in the team, I designed and oversaw 12 features. 7 features have been released to live production with 2 features in the backlog.</p>
      <ContentBlock
        content1={<ImageCaption image={image1} caption="Iterative design process"/>}
        content2={<ImageCaption image={image2} caption="Decision making matrix"/>}
        align="items-end"
      ></ContentBlock>
    </section>
  )
}