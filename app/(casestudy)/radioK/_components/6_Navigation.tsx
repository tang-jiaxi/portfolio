import { FullContentBlock } from "@/components/FullContentBlock";
import navigation from "@/images/radioK/6_navigation.webp"
import Image from "next/image";

export default function Navigation() {
  const text = (
    <>
      <h5>Issue 2</h5>
      <h1>Current Navigation Experience</h1>
      <p>📌 Can be improved<br></br>
      The podcast may have lowered user retention due to the difficulty of navigating between podcasts and viewing the description of each episode.</p>
    </>
  )

  const imageElement = (
    <Image
      src={navigation}
      alt="Annotating potential improvements for the current webpage"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={imageElement}
    ></FullContentBlock>
  )
}