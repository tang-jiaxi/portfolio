import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import { FullContentBlock } from "@/components/FullContentBlock";
import designSystem from "@/images/wtl/13_design_system.webp";
import analytics from "@/images/wtl/13_analytics_app.webp";
import inspiration from "@/images/wtl/13_inspiration_app.webp";
import Image from "next/image";

export default function FinalDesign() {
  const text = (
    <>
      <h1>Final Design</h1>
      <p>p.s. I’m no longer on the team, but feel free to reach out if you’re interested in project updates!</p>
    </>
  )

  const designInspoText = (
    <div>
      <h5 className="text-black">Design Inspiration App</h5>
      <p>Draws inspiration from fashion design’s illustrative process to answer objective 1 of the design brief.</p>
    </div>
  )

  const designInspoQuote = (
    <blockquote className="mt-0">
      "Can we predict the ultility of a design concept with the wardrobes of existing consumers?""
      <cite>— Objective 1</cite>
  </blockquote>
  )

  const designInspoImage = (
    <Image
      src={inspiration}
      alt="UI iteration 1: 1 representative image"
    />
  )

  const analyticsText = (
    <div>
      <h5 className="text-black">Data Analytics App</h5>
      <p>Draws inspiration from fashion design’s ideation process to answer objective 2 of the design brief.</p>
    </div>
  )

  const analyticsQuote = (
    <blockquote className="mt-0">
      "What fraction of the consumers's existing wardrobe is compatible with this design?""
      <cite>— Objective 2</cite>
  </blockquote>
  )

  const analyticsImage = (
    <Image
      src={analytics}
      alt="UI iteration 1: 1 representative image"
    />
  )

  const designSystemImage = (
    <Image
      src={designSystem}
      alt="UI iteration 1: 1 representative image"
    />
  )

  return (
    <ContentWrapper>
      <ContentBlock content1={text}/>
      <FullContentBlock
        content1={<ContentBlock content1={designInspoText} content2={designInspoQuote} isGap={false}/>}
        fullImage={designInspoImage}
        isFullWidth
      ></FullContentBlock>
      <FullContentBlock
        content1={<ContentBlock content1={analyticsText} content2={analyticsQuote} isGap={false}/>}
        fullImage={analyticsImage}
        isFullWidth
      ></FullContentBlock>
      <FullContentBlock
        content1={<h5 className="text-black">Design System</h5>}
        fullImage={designSystemImage}
      ></FullContentBlock>
    </ContentWrapper>
  )
}