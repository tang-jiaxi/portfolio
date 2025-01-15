import { ContentBlock } from "@/components/ContentBlock";

export default function UserResearch() {
  const text = (
    <>
      <h5>#2</h5>
      <h1>User Research</h1>
      <p>To answer my research questions, I conducted in-person user interviews and online surveys to uncover more insights.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}