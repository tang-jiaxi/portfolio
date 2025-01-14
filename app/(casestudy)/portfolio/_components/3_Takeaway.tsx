import { FullContentBlock } from "@/components/FullContentBlock";

export default function Takeaway() {
  const text = (
    <>
      <h1>Takeaways</h1>
      <ul style={{ listStyleType: "'✅'" }} className="mt-[0.75rem] ml-1">
        <li>All text are in small chunks of readable length</li>
        <li>Minimalism with BIG images</li>
        <li>Slide-show smooth scrolling style</li>
        <li>Interactive/gamified aspect</li>
      </ul>
    </>
  )

  return (
    <FullContentBlock
      content1={text}
    ></FullContentBlock>
  )
}