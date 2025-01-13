import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import { ImageCaption } from "@/components/ImageCaption";
import filter from "@/images/radioK/16_filter.webp"
import otherPodcasts from "@/images/radioK/16_other_podcasts.webp"
import branding from "@/images/radioK/16_radiok_branding.webp"
import Image from "next/image";

export default function UIMoodBoard() {

  const text = (
    <div>
      <h5>#3.1</h5>
      <h1>UI Mood Board</h1>
      <p className="mb-0">Focuses on</p>
      <ul>
        <li>RadioK&apos;s branding</li>
        <li>Other podcast/music players</li>
        <li>Best practices for related design components</li>
      </ul>
    </div>
  )

  const image1 = (
    <ContentWrapper>
      <ImageCaption 
        image={<Image src={branding} alt="Current RadioK Branding"/>}
        caption="Current Branding"
      />
      <ImageCaption 
        image={<Image src={filter} alt="Component design"/>}
        caption="Component design"
      />
    </ContentWrapper>
  )

  const image2 = (
    <ImageCaption 
      image={<Image src={otherPodcasts} alt="Current RadioK Branding"/>}
      caption="Other podcast designs"
    />
  )

  return (
    <ContentWrapper>
      {text}
      <ContentBlock 
        content1={image1}
        content2={image2}
        align="flex-start"
      />
    </ContentWrapper>
  )
}