import { ContentBlock } from "@/components/ContentBlock";
import { ContentWrapper } from "@/components/ContentWrapper";
import { FullContentBlock } from "@/components/FullContentBlock";
import iteration1 from "@/images/wtl/12_iteration1.webp";
import iteration2 from "@/images/wtl/12_iteration2.webp";
import iteration3 from "@/images/wtl/12_iteration3.webp";
import iteration4 from "@/images/wtl/12_iteration4.webp";
import Image from "next/image";

export default function Iterations() {
  const text = (
    <>
      <h1>UI Design Iterations</h1>
      <p>With some sketches, I rapidly prototyped. Ultimately, we decided to separate our design inspiration app from the data analytics app for the time being.</p>
    </>
  )

  const iterationText1 = (
    <div>
      <h5 className="text-black">Approach 1</h5>
      <p>Produce 1 representative image from selected data</p>
    </div>
  )

  const iterationImage1 = (
    <Image
      src={iteration1}
      alt="UI iteration 1: 1 representative image"
      className="border border-gray-dark"
    />
  )

  const iterationText2 = (
    <div>
      <h5 className="text-black">Approach 2</h5>
      <p>Generate cards of individual garments from selected data</p>
    </div>
  )

  const iterationImage2 = (
    <Image
      src={iteration2}
      alt="UI iteration 2: Card style"
      className="border border-gray-dark"
    />
  )

  const iterationText3 = (
    <div>
      <h5 className="text-black">Approach 3</h5>
      <p>Generate an inspiration image collage from selected data</p>
    </div>
  )

  const iterationImage3 = (
    <Image
      src={iteration3}
      alt="UI iteration 3: Image collage"
      className="border border-gray-dark"
    />
  )

  const iterationText4 = (
    <div>
      <h5 className="text-black">Approach 4</h5>
      <p>Generate a scrapbook-style mood board from selected data</p>
    </div>
  )

  const iterationImage4 = (
    <Image
      src={iteration4}
      alt="UI iteration 4: Scrapbook style"
      className="border border-gray-dark"
    />
  )

  return (
    <ContentWrapper>
      <ContentBlock content1={text} isFlexRow={false}/>
      <FullContentBlock isFullWidth content1={iterationText1} fullImage={iterationImage1}/>
      <FullContentBlock isFullWidth content1={iterationText2} fullImage={iterationImage2}/>
      <FullContentBlock isFullWidth content1={iterationText3} fullImage={iterationImage3}/>
      <FullContentBlock isFullWidth content1={iterationText4} fullImage={iterationImage4}/>
    </ContentWrapper>
  )
}