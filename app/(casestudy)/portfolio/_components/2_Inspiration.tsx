import { FullContentBlock } from "@/components/FullContentBlock";
import moodBoard from "@/images/portfolio/2_inspiration.webp"
import Image from "next/image";

export default function Inspiration() {
  const text = (
    <>
      <h5>#1</h5>
      <h1>Inspiration</h1>
      <p>I looked at portfolios on Awwwards, Behance,  FWA etc. and noted down what I liked about them.</p>
    </>
  )

  const imageElement = (
    <Image
      src={moodBoard}
      alt="Portfolio website mood board"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={imageElement}
    ></FullContentBlock>
  )
}