import interview2 from "@/images/govtech/7_user_interview2_flow.webp";
import visualNotes from "@/images/govtech/7_visual_notes.webp";
import Image from "next/image";
import { ImageCaption } from "@/components/ImageCaption";

export default function UserInterview2() {
  const textLeft = (
    <>
      <p>Audience: Key Personnel (KP)</p>
      <small>i.e. teachers who were middle management and above. Data analysis is typically part of their job.</small>
    </>
  )

  const textRight = (
    <>
      <p>We knew these teachers used data extensively. To avoid the priming effect present in Interview 1, I crafted a controlled conversation with flexible story points instead of chronologically-ordered questions.</p> 
    </>
  )

  const imageElement = (
    <Image
      src={visualNotes}
      alt="Template to take visual notes"
    />
  )

  return (
    <section>
      <h1>User Interviews #2</h1>
      <div className="flex flex-col gap-4 md:gap-12">
        <div className="flex flex-col footer:flex-row footer:justify-between footer:gap-4">
          <div className="footer:basis-1/3">{textLeft}</div>
          <div className="footer:basis-2/3">{textRight}</div>
        </div>
        <Image
          src={interview2}
          alt="Interviews #2 question flow"
          className="w-full"
        />
        <ImageCaption
          image={imageElement}
          caption="Planned to take down visual notes while interviewee talks about their workflow, but didn’t follow through as I couldn’t multitask D:"
        />
      </div>
    </section>
  )
}