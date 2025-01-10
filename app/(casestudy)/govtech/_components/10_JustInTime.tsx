import { ContentBlock } from "@/components/ContentBlock";

export default function JustInTime() {
  const text = (
    <>
      <h1>Case Study: Just-in-time Feedback</h1>
      <p>We released many features in a short period of time and wanted to know how our users felt. </p>
      <p>We previously sent out long forms, but those were rarely filled in. Even if it was, it&apos;s an unsustainable amount of information to analyze on our end.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}