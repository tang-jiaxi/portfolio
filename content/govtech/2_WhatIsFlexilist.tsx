import { ContentBlock } from "@/components/ContentBlock";
import govtechPhone from "@/images/govtech/2_govtech_phone.webp";
import Image from "next/image";

export default function WhatIsFlexilist() {
  const text = (
    <>
      <h1>What is Flexilist?</h1>
      <p>An official-use custom student name list web app:</p>
      <ul>
        <li>Mobile friendly for easy access on the go</li>
        <li>Collaborate with other teachers in real-time</li>
        <li>Syncs directly to our national student database</li>
      </ul>
    </>
  )

  const imageElement = (
    <Image
      src={govtechPhone}
      alt="Cropped screenshot of app home page"
    />
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
      image2={imageElement}
    ></ContentBlock>
  )
}