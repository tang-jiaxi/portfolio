import { ContentBlock } from "@/components/ContentBlock";

export default function Usability() {
  const text = (
    <>
      <h1>Usability</h1>
      <p className="mb-0">However, users aren’t the happiest about giving feedback, especially when it's a pop-up. It interrupts their task and doesn’t provide immediate value.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}