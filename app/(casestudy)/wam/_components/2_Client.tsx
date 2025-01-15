import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import building from "@/images/wam/building.webp"
import Image from "next/image";

export default function Client() {
  const text = (
    <>
      <h1>Client Background:<br></br>Weisman Art Museum</h1>
      <p>Weisman Art Museum is located in the University of Minnesota. It features a striking exterior designed by the renowned architect, Frank Gehry.</p>
    </>
  )

  const imageElement = (
    <Image
      src={building}
      alt="Weisman Art Museum Architecture"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={<ImageCaption image={imageElement} caption="Weisman Art Museum"/>}
    ></ContentBlock>
  )
}