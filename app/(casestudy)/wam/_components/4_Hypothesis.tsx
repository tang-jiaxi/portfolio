import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ImageCaption } from "@/components/ImageCaption";
import flowChart from "@/images/wam/research_flow.webp"
import Image from "next/image";

export default function Hypothesis() {
  const text = (
    <>
      <h5>#1</h5>
      <h1>Research Questions</h1>
      <ul>
        <li>How did current visitors find out about Weisman?</li>
        <li>Why do current students not go to Weisman?</li>
        <li>Is Weisman on the correct marketing platforms?</li>
        <li>In general, what do students like or dislike about venues, and how do they choose where to go?</li>
      </ul>
    </>
  )

  const imageElement = (
    <Image
      src={flowChart}
      alt="Thought process flow chart"
    />
  )

  return (
    <ContentWrapper>
      <ContentBlock content1={text}/>
      <ImageCaption image={imageElement} caption="Thought process flow chart"/>
    </ContentWrapper>
  )
}