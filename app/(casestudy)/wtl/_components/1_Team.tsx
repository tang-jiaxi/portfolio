import { ContentBlock } from "@/components/ContentBlock";
import logos from "@/images/wtl/1_university_logos.webp";
import Image from "next/image";

export default function Team() {
  const text = (
    <>
      <h1>Meet the Team</h1>
      <p>A cross-university research project involving the University of Minnesota, Cornell University, and the University of Delaware.</p>
      <h3>This work was funded by the National Science Foundation under grants #2222903, #2222904, and #2222905.</h3>
    </>
  )

  const imageElement = (
    <Image
      src={logos}
      alt="Logos: University of Minnesota, Cornell University, University of Delaware, National Science Foundation"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
    ></ContentBlock>
  )
}
