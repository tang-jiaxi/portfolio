import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import reactPlanning from "@/images/govtech/18_react_planning.webp";
import Image from "next/image";

export default function Feedback() {
  // const text = (
  //   <>
  //     <h1>Interdisciplinary insights & more</h1>
  //     <p>Contact me via&nbsp;
  //       <a href="mailto:jt.jiaxitang@gmail.com" style={{textDecoration: "underline", font: "inherit"}}>
  //         jt.jiaxitang@gmail.com
  //       </a> 
  //       &nbsp;to find out about details such as feature design case studies!
  //     </p>
  //   </>
  // )
  const text = (
    <>
      <h1>Overall, my contributions received positive user feedback!</h1>
        <blockquote>
        <div>&quot;With the new features (including add dropdown selection), I can conduct an item and error analysis of a student cohort much more easily.&quot;</div>
        <cite>— Math teacher, Secondary School (Grade 7-10)<br></br>
        * quote obfuscated due to NDA</cite>
      </blockquote>
    </>
  )

  const imageElement = (
    <Image
      src={reactPlanning}
      alt="Laying out component architecture for react development"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={<ImageCaption image={imageElement} caption="Behind-the-scenes: Laying out the 'Dropdown selection' component architecture for React development"/>}
    ></ContentBlock>
  )
}