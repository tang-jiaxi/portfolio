import drawerQuantitative from "@/images/govtech/14_qualitative_drawer.webp";
import expandedDrawer from "@/images/govtech/14_expanded_drawer.webp";
import Image from "next/image";
import { ImageCaption } from "@/components/ImageCaption";
import { ContentBlock } from "@/components/ContentBlock";

export default function FinalDesign() {
  const text = (
    <>
      <h5>Final Design</h5>
      <h1>Balance Functionality & Usability</h1>
      <p>In Version 2, users can&apos;t backtrack to edit their rating in case of a misclick. Considering that it&apos;s not critical to hide the already selected binary rating system, I opted to retain it as part of the extended bottom sheet so that users can still edit their selection.</p>
    </>
  )

  const image1 = (
    <Image
      src={drawerQuantitative}
      alt="Bottom sheet: Pre-selection thumbs up/thumbs down (quantitative)"
    />
  )

  const image2 = (
    <Image
      src={expandedDrawer}
      alt="Bottom sheet: Post-selection thumbs up/thumbs down (quantitative) with free-text section (qualitative)"
    />
  )

  return (
    <div>
      <ContentBlock
        content1={text}
      ></ContentBlock>
      <ContentBlock
        content1={<ImageCaption image={image1} caption="Bottom sheet: Pre-selection thumbs up/thumbs down (quantitative)"/>}
        content2={<ImageCaption image={image2} caption="Bottom sheet: Post-selection thumbs up/thumbs down (quantitative) with free-text section (qualitative)"/>}
      ></ContentBlock>
    </div>
  )
}