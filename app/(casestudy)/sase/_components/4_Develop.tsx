import { ContentBlock } from "@/components/ContentBlock";
import frontendTechstack from "@/images/govtech/16_techstack.webp";
import backendTechstack from "@/images/sase/backend_techstack.webp";
import Image from "next/image";
import { ImageCaption } from "@/components/ImageCaption";

export default function Develop() {
  const image1 = (
    <>
      <Image
        src={frontendTechstack}
        alt="Tech stack logos: React.js, Javascript, Typescript, ChakraUI library"
      />
    </>
  )

  const image2 = (
    <>
      <Image
        src={backendTechstack}
        alt="Work-in-progress tech stack logos: React.js, Javascript, Typescript, ChakraUI library"
      />
    </>
  )
  
  return (
    <section>
      <h5>#3</h5>
      <h1>Develop it!</h1>
      <p className="md:mb-12">I wanted to continue building upon my Javascript expertise, so I picked Javascript-related technologies.</p>
      <ContentBlock
        image1={<ImageCaption image={image1} caption="Frontend tech stack"/>}
        image2={<ImageCaption image={image2} caption="Work-in-progress backend tech stack"/>}
        align="items-start"
      ></ContentBlock>
    </section>
  )
}