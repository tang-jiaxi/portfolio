import { ContentBlock } from "@/components/ContentBlock";

export default function Problem() {
  const text = (
    <>
      <h5>#1</h5>
      <h1>Research Problem</h1>
      <small>Completed by my team before I joined</small>
      <p>The fashion design industry contributes to a lot of waste.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}