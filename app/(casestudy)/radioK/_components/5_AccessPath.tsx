import { FullContentBlock } from "@/components/FullContentBlock";
import accessPathway from "@/images/radioK/5_access_pathway.webp"
import Image from "next/image";

export default function AccessPath() {
  const text = (
    <>
      <h5>Issue 1</h5>
      <h1>Current Access Pathways</h1>
      <p>📌 Can be improved<br></br>The podcast may have lowered discoverability due to broken links, usage of an unfamiliar &quot;RCP&quot; acronym, and its unintuitive location under the Explore tab on the website.</p>
    </>
  )

  const imageElement = (
    <Image
      src={accessPathway}
      alt="Flowchart of access pathway painpoints"
    />
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={imageElement}
    ></FullContentBlock>
  )
}