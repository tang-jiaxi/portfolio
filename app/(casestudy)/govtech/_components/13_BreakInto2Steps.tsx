import toastQuantitative from "@/images/govtech/13_toast_quantitative.webp";
import toastQualitative from "@/images/govtech/13_toast_qualitative.webp";
import toastExternalLink from "@/images/govtech/13_toast_external_link.webp";
import Image from "next/image";
import { ContentBlock } from "@/components/ContentBlock";

export default function BreakInto2Steps() {

  return (
    <section>
      <h1>Break into 2 steps</h1>
      <p>Wow so short and easy</p>
      <Image
        src={toastQuantitative}
        alt="Page 2 quantitative thumbs up thumbs down drawer"
        className="w-1/2 md:pr-8"
      ></Image>
      <p className="w-full md:w-1/2">After they click a rating</p>
      <ContentBlock
        content1={<Image src={toastQualitative} alt="Page 2 free text response drawer"/>}
        content2={<Image src={toastExternalLink} alt="Page 2 link to external feedback form drawer"/>}
        align="items-end"
      ></ContentBlock>
      <small className="text-center mt-1 md:mt-3">Version 2: Purely usable toast design</small>
    </section>
  )
}