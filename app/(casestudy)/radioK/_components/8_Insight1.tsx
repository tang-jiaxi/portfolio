import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import smartless from "@/images/radioK/8_SmartLess.webp"
import Image from "next/image";

export default function Insight1() {
  const text = (
    <>
      <h1>Insight 1</h1>
      <p>Users expect more previews and descriptions of each episode.</p>
      <blockquote>&quot;I expected snippets of episodes, new episode alerts, behind the scenes. I think that getting to know the personalities of hosts is also important.&quot;</blockquote>
      <blockquote>
        Popular podcast channels such as “SmartLess” often post snippets of each episode on Instagram.
        <cite>— Instagram @smartless</cite>
      </blockquote>
    </>
  )

  const imageElement = (
    <Image
      src={smartless}
      alt="Real College Podcast and RadioK logos"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={<ImageCaption image={imageElement} caption="Instagram @smartless"/>}
      isFlexRow={false}
    ></ContentBlock>
  )
}