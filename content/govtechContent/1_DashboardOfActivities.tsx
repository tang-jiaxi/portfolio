import { ContentBlock } from "@/components/ContentBlock";
import dashboard from "@/images/govtech/1_govtech_dashboard.webp";
import Image from "next/image";

export default function DashboardofActivities() {
  const text = (
    <>
      <h1>Dashboard of activities</h1>
      <p>I directly contributed to live projects during my internship, gaining hands-on experience in bringing ideas from concept to implementation.</p>
      <h3>To comply with my non-disclosure agreement, all confidential information including user quotes have been obfuscated or omitted from this case study.</h3>
    </>
  )

  const imageElement = (
    <Image
      src={dashboard}
      alt="Overview of activities I did during my internship"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
    ></ContentBlock>
  )
}