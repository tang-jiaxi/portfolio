import { ContentBlock } from "@/components/ContentBlock";
import multiplePerspectives from "@/images/govtech/16_multiple_perspectives.webp";
import techstack from "@/images/govtech/16_techstack.webp";
import Image from "next/image";

export default function Frontend() {
  const text = (
    <>
      <h5>#4</h5>
      <h1>Front-end Development</h1>
      <p>I pushed to production 3 features and 8 bug fixes. Wearing two hats leads to larger opportunities, especially since I’m developing my own designs.</p>
    </>
  )

  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <ContentBlock
        content1={text}
      ></ContentBlock>
      <Image
        src={multiplePerspectives}
        alt="Visual equation showing that design POV combined with developer POV leads to greater product completeness"
      />
      <Image
        src={techstack}
        alt="Techstack logos: React.js, Javascript, Typescript, ChakraUI library"
        className="footer:w-2/3 footer:mx-auto"
      />
    </section>  
  )
}