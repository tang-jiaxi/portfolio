import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import moodBoard from "@/images/wtl/10_moodboard.webp";
import Image from "next/image";

export default function MoodBoard() {
  const text = (
    <>
      <h1>Start from UI Design Mood board</h1>
      <p>My mood board focuses on:</p>
      <ul>
        <li>UI of apps that fashion designers like to use</li>
        <li>UI of apps with data visualization/analytics</li>
      </ul>
    </>
  )

  const imageElement = (
    <Image
      src={moodBoard}
      alt="UI design process flowchart"
      className="border border-gray-dark"
    />
  )

  return (
    <ContentWrapper>
      <ContentBlock
        content1={text}
        isFlexRow={false}
      ></ContentBlock>
      {imageElement}
    </ContentWrapper>
  )
}