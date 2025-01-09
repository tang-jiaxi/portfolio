import { ContentBlock } from "@/components/ContentBlock";

export default function TheSolution() {
  const text = (
    <>
      <h1>The solution?</h1>
      <p>“Trick” users by reducing the cognitive load of the pop-up without sacrificing functionality.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}