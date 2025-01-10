import { ContentBlock } from "@/components/ContentBlock";

export default function Usability() {
  const text = (
    <>
      <h1>Usability</h1>
      <p className="mb-0">However, users aren&apos;t the happiest about giving feedback, especially when it&apos;s a pop-up. It interrupts their task and doesn&apos;t provide immediate value.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}