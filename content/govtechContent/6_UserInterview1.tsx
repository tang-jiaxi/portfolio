import { ContentBlock } from "@/components/ContentBlock";
import interview1 from "@/images/govtech/6_user_interview1_flow.webp";
import Image from "next/image";

export default function UserInterview1() {
  const text = (
    <>
      <h1>User Interviews #1 Findings</h1>
      <p>Audience: Regular Teachers</p>
      <p>They were only concerned with data types that directly impacted their day-to-day operations. 
      e.g. attendance, dietary needs</p>
      <blockquote>
        <div>“Do I need this data to deliver the lesson? No. I just need to make sure I teach well. It would be extra work to collect and look at the data.”</div>
        <cite>— Math teacher, Primary School (Grade 1-6)<br></br>
        * quote obfuscated due to NDA</cite>
      </blockquote>
    </>
  )

  const imageElement = (
    <Image
      src={interview1}
      alt="Interviews #1 question flow"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
    ></ContentBlock>
  )
}