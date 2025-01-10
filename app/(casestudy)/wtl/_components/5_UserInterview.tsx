import { ContentBlock } from "@/components/ContentBlock";

export default function UserInterview() {
  const text = (
    <>
      <h1>User Interviews</h1>
      <p>We interviewed fashion designers, and they agreed with our hypothesis.</p>
      <blockquote>“The ‘customer’ is a vague, fairly monolithic concept.”</blockquote>
      <blockquote>“Real feedback during the design process is hard to get and harder to use.”</blockquote>
      <blockquote>“Customer is known largely through previous sales data.”</blockquote>
      <blockquote>“The designers’ tacit expertise is the backbone of concept development processes.”</blockquote>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}