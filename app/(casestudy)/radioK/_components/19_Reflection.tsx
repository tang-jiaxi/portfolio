import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import presentation from "@/images/radioK/19_presenting.webp";
import Image from "next/image";

export default function Reflection() {
  const text = (
    <>
      <h5>#4</h5>
      <h1>Moving forward</h1>
      <p>The podcast website navigation is only one part of the podcast experience.</p>
      <ol>
        <li className="font-bold text-black">
          Improve integration between platforms
          <p className="pt-0">Potential to find a better ‘home’ in the larger RadioK website, and a better call-to-action from social media platforms.</p>
        </li>
        <li className="font-bold text-black">
          Prioritize marketing
          <p className="pt-0">E.g. shoutouts from @radioK770 instagram or during radio shows.</p>
        </li>
        <li className="font-bold text-black">
          Include advanced features (lower priority)
          <p className="pt-0">E.g. favorites playlist, queue system on website.</p>
        </li>
      </ol>
    </>
  )

  const imageElement = (
    <Image
      src={presentation}
      alt="Me presenting my team's work"
      className="w-5/6 md:w-2/3"
    />
  )

  return (
    <ContentBlock
      content1={text}
      content2={
        <ImageCaption 
          image={imageElement} 
          caption="Me presenting the project at DesignU&apos;s end of semester Portfolio event"
        />
      }
      isFlexRow={false}
    ></ContentBlock>
  )
}