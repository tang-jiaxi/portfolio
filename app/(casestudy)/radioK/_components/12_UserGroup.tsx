import { ContentBlock } from "@/components/ContentBlock";

export default function UserGroup() {
  const text = (
    <>
      <h1>User Group – University Students</h1>
      <ul>
        <li>Tech-savvy</li>
        <li>Likes relatable or cool things</li>
        <li>Busy</li>
        <li>Open-minded</li>
        <li>Budget-conscious</li>
      </ul>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}