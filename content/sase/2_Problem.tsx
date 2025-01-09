import { ContentBlock } from "@/components/ContentBlock";

export default function Problem() {
  const text = (
    <>
      <h5>#1</h5>
      <h1>Problem With Past Implementations</h1>
      <p>Resumes were collected via Google Form and placed in a shared Google Drive for sponsors to view</p>
      <ul style={{ listStyleType: "'❌'" }} className="mt-[0.75rem] ml-1">
        <li className="pl-2">No student information available at a glance</li>
        <li className="pl-2">Hard to navigate between resumes</li>
        <li className="pl-2">Feels unprofessional</li>
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