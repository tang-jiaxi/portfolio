import { ContentBlock } from "@/components/ContentBlock";
import screening from "@/images/wam/screening.webp"
import Image from "next/image";

export default function Insight1() {
  const text = (
    <>
      <h1>Insight 1</h1>
      <p>After explaining what Weisman offers, students just need a bit of nudge for them to explore.</p>
      <blockquote>&quot;I didn’t know Weisman was free. I’ve never received emails or promotions about the museum.&quot;</blockquote>
      <blockquote>&quot;Where is it? I never knew its name. But the exterior caught my eye.&quot;</blockquote>
    </>
  )

  const imageElement = (
    <Image
      src={screening}
      alt="Survey piecharts"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
      isFlexRow={false}
    ></ContentBlock>
  )
}