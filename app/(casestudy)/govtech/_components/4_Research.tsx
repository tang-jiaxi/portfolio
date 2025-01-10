import { ContentBlock } from "@/components/ContentBlock";

export default function P1Research() {
  const text = (
    <>
    <h5>#1</h5>
    <h1>Research</h1>
    <p>Do teachers benefit from easier access to data?
    To answer this question, I summarized 2 years worth of past research in Dovetail, before narrowing down to the <b>Trend Analysis</b> use case.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}