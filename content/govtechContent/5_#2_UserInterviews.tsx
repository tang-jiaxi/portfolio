import { ContentBlock } from "@/components/ContentBlock";
import vennDiagram from "@/images/govtech/5_govtech_venn.webp";
import Image from "next/image";

export default function UserInterviews() {
  const text = (
    <>
      <h5>#2</h5>
      <h1>User Interviews</h1>
      <p>How do teachers currently use data? <br></br>
      a.k.a. What features should we build to encourage a data-driven approach?</p>
    </>
  )

  const imageElement = (
    <Image
      src={vennDiagram}
      alt="Venn diagram of information"
      className="w-7/12 mx-auto"
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