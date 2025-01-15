import { ContentBlock } from "@/components/ContentBlock";
import survey from "@/images/wam/survey.webp"
import Image from "next/image";

export default function Insight2() {
  const text = (
    <>
      <h1>Insight 2</h1>
      <p>In terms of spaces, students were interested in:</p>
      <ul>
        <li>study spaces where eating is allowed</li>
        <li>an unique atmosphere different from libraries</li>
      </ul>
      <blockquote>&quot;I thought that with such an interesting architecture on the outside, it must be interesting on the inside.&quot;</blockquote>
      <blockquote>&quot;I just don&apos;t like library mood, it&apos;s too dark. I would prefer a cafe environment, I love that jazzy, good lighting.&quot;</blockquote>
    </>
  )

  const imageElement = (
    <Image
      src={survey}
      alt="Survey piecharts"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
    ></ContentBlock>
  )
}