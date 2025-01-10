import { ContentBlock } from "@/components/ContentBlock";

export default function UI2Findings() {
  const text = (
    <>
      <h1>User Interviews #2 Findings</h1>
      <p>Naturally, these teachers were excited about incorporating more data usage, providing clear insights into its benefits.</p>
      <p className="mb-0">With this confirmation, we could go ahead with feature development.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}