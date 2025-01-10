import { ContentBlock } from "@/components/ContentBlock";
import { ImageCaption } from "@/components/ImageCaption";
import saseBoard from "@/images/sase/6_sase_board.webp";
import Image from "next/image";

export default function Reflection() {
  const text = (
    <>
      <h5>#4</h5>
      <h1>Moving forward</h1>
      <p>The website can benefit from more advanced developments.</p>
      <ol>
        <li className="font-bold text-black">
          <span >Include a back-end database [In-progress 🚧]</span>
          <p className="pt-0">Store and update information automatically instead of manually uploading data</p>
        </li>
        <li className="font-bold text-black">
          Allow for greater user control
          <p className="pt-0">E.g. resize columns by dragging column edges</p>
        </li>
        <li className="font-bold text-black">
          User testing with recruiters
          <p className="pt-0">Iterate design based on user feedback</p>
        </li>
      </ol>
    </>
  )

  const imageElement = (
    <Image
      src={saseBoard}
      alt="SASE board group picture"
    />
  )

  return (
    <ContentBlock
      content1={text}
      content2={
        <ImageCaption 
          image={imageElement} 
          caption="Fun head shots taken with my SASE board members!"
        />
      }
      isFlexRow={false}
    ></ContentBlock>
  )
}