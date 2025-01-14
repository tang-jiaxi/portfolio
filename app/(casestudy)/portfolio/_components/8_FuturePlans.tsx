import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import headshot from "@/images/portfolio/8_cartoon_headshot.webp"
import Image from "next/image";

export default function FuturePlans() {
  const text = (
    <>
      <h5>#4</h5>
      <h1>Future plans</h1>
      <p>Admittedly, I underestimated the work involved in web development, as I constantly have features I want to work on. But that&apos;s the fun of it!</p>
      <ol>
        <li className="font-bold text-black">
          Improve front page animation
          <ul>
            <li className="font-normal">Animate the jug in the background with AfterEffects to look more realistic</li>
            <li className="font-normal mb-3">Streamline Matter.js or consider integrating/switch to another library, as Matter.js is not optimized for animation</li>
          </ul>
        </li>
        <li className="font-bold text-black">
          Optimize loading
          <p className="pt-0">Further optimize images, Include more loading skeletons, and a loading screen</p>
        </li>
      </ol>
    </>
  )

  const imageElement = (
    <Image
      src={headshot}
      alt="Wave animation visualization"
      className="w-1/2 mx-auto"
    />
  )

  return (
    <ContentBlock
      content1={text}
      content2={<ImageCaption image={imageElement} caption="Thanks for visiting my portfolio website, I&apos;d love to hear your feedback!  — Jiaxi Tang"/>}
    ></ContentBlock>
  )
}