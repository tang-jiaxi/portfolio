import { ContentBlock } from "@/components/ContentBlock";

export default function Heuristics() {
  const text = (
    <>
      <h5>Final Design</h5>
      <h1>Usability Heuristics Analysis</h1>
      <ul style={{ listStyleType: "'✅'" }} className="mt-[0.75rem] ml-1">
        <li className="pl-2">Visibility of system status</li>
        <li className="pl-2">User control and freedom</li>
        <li className="pl-2">Error prevention</li>
        <li className="pl-2">Recognize, diagnose, and recover from errors</li>
      </ul>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}