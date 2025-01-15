import { FullContentBlock } from "@/components/FullContentBlock";
import moodboard from "@/images/wam/moodboard.webp"
import Image from "next/image";

export default function MoodBoard() {
  const text = (
    <>
      <h1>UI Moodboard</h1>
      <p>Focuses on</p>
      <ul>
        <li>Current art/graphics related to Weisman</li>
        <li>Information visualization</li>
      </ul>
    </>
  )

  const imageElement = (
    <Image
      src={moodboard}
      alt="UI Moodboard"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={imageElement}
      isFullWidth
    ></FullContentBlock>
  )
}