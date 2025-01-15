import { FullContentBlock } from "@/components/FullContentBlock";
import panel1 from "@/images/wam/panel1.webp"
import panel2 from "@/images/wam/panel2.webp"
import panel3 from "@/images/wam/panel3.webp"
import Image from "next/image";

export default function FinalDesign() {
  const text = (
    <>
      <h1>Final Design</h1>
      <p>Information I seeked to include:</p>
      <ul>
        <li>Free admission</li>
        <li>Art shop where you can rent and buy art</li>
        <li>Commercial cafe that serves coffee and tea</li>
        <li>Study and meeting spaces</li>
      </ul> 
    </>
  )

  const imageElement = (
    <div className="flex flex-row justify-between max-w-full w-full">
      <Image
        src={panel1}
        alt="Banner panel 1"
        className="w-[32%] h-auto"
      />
      <Image
        src={panel2}
        alt="Banner panel 2"
        className="w-[32%] h-auto"
      />
      <Image
        src={panel3}
        alt="Banner panel 3"
        className="w-[32%] h-auto"
      />
    </div>
  )

  return (
    <FullContentBlock
      content1={text}
      fullImage={imageElement}
      isFullWidth
    ></FullContentBlock>
  )
}