import { ContentBlock } from "@/components/ContentBlock";

export default function UIUX() {
  const text = (
    <>
      <h5>#3</h5>
      <h1>UI/UX Design</h1>
      <p>At this point, my team and I split to work on marketing and podcast website redesign respectively. To identify potential improvements, I decided to use user personas and journey maps.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}