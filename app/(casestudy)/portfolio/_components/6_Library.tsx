import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import wave from "@/images/portfolio/6_wave.webp"
import Image from "next/image";

export default function Library() {
  const text = (
    <>
      <h1>Struggled most with picking a library to create the wave animation</h1>
      <p>I considered these libraries:</p>
      <ul style={{ listStyleType: "'❌'" }} className="mt-[0.75rem] ml-1">
        <li><span className="font-bold">GSAP.js:</span> Physics plugin required payment</li>
        <li><span className="font-bold">LiquidFun:</span> Not the most compatible with JS, and I leaned more towards a flat vector style</li>
      </ul>
      <ul style={{ listStyleType: "'✅'" }} className="ml-1">
        <li><span className="font-bold">Matter.js:</span> Physics engine meant I didn&apos;t need to reinvent the wheel, so I went with this option</li>
      </ul>
    </>
  )

  const imageElement = (
    <Image
      src={wave}
      alt="Wave animation visualization"
    />
  )

  return (
    <ContentBlock
      content1={text}
      content2={<ImageCaption image={imageElement} caption="Home page wave animation visualization"/>}
    ></ContentBlock>
  )
}