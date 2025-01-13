import { ContentBlock } from "@/components/ContentBlock";
import personaMoodboard from "@/images/radioK/13_user_persona.webp"
import Image from "next/image";

export default function UserPersona() {
  const text = (
    <>
      <h1>User Persona – Alex</h1>
      <ul className="mt-3">
        <li>21 years old</li>
        <li>Senior in the University of Minnesota</li>
        <li>Majoring in IT & UX Design</li>
      </ul>
      <p>Alex is busy with school and a job. He doesn&apos;t listen to many podcasts, but he&apos;s willing to try. Alex primarily discovers new things through social media, especially Instagram. </p>
      <p className="font-bold mb-0">Wants</p>
      <p className="mt-0">A free entertainment option that allows him to both relax and learn, and that he&apos;ll feel good supporting.</p>
      <p className="font-bold mb-0">Frustrations</p>
      <p className="m-0">No time to evaluate available entertainment options to find a suitable one.</p>
    </>
  )

  const imageElement = (
    <Image
      src={personaMoodboard}
      alt="Persona mood board"
      className="lg:w-5/6 mx-auto"
    />
  )

  return (
    <ContentBlock
      content1={text}
      image2={imageElement}
      isFlexRow={false}
    ></ContentBlock>
  )
}