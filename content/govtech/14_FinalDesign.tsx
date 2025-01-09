import { FullContentBlock } from "@/components/FullContentBlock";
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
      <p>In Experiment 2, users can’t backtrack to edit their rating in case of a misclick. After some thought, I realized it’s not critical to omit information in Step 2.</p>
    </>
  )

  const image1 = (
    <Image
      src={drawerQuantitative}
      alt="Page 1 quantitative thumbs up thumbs down drawer"
    />
  )

  const image2 = (
    <Image
      src={expandedDrawer}
      alt="Page 2 combined quantitative and qualitative feedback"
    />
  )

  return (
    <div>
      <ContentBlock
        content1={text}
      ></ContentBlock>
      <ContentBlock
        content1={<ImageCaption image={image1} caption="Drawer Page 1: Went with a drawer instead of a toast to reduce engineering workload"/>}
        content2={<ImageCaption image={image2} caption="Drawer Page 2: Now retains previous response and also displays quantitative feedback field"/>}
      ></ContentBlock>
    </div>
  )
}