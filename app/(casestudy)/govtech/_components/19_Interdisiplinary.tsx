import { ContentBlock } from "@/components/ContentBlock";

export default function Interdisiplinary() {
  const text = (
    <>
      <h1>And there&apos;s more!</h1>
      <p>These are just glimpses of the many interdisiplinary learning moments I had during my internship. Let&apos;s connect if you&apos;d like to hear more about my experience!
      </p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}