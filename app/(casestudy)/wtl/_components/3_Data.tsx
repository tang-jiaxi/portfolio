import { ContentWrapper } from "@/components/ContentWrapper";
import data from "@/images/wtl/3_data.webp";
import Image from "next/image";

export default function Data() {
  const text = (
    <div>
      <h1>Main finding</h1>
      <p>97% of all garments produced are wasted.</p>
    </div>
  )

  const imageElement = (
    <Image
      src={data}
      alt="97% of garments produced are wasted"
    />
  )

  return (
    <ContentWrapper>
      {text}
      {imageElement}
    </ContentWrapper>
  )
}
