import { ContentBlock } from "@/components/ContentBlock";

export default function Hypothesis() {
  const text = (
    <>
      <h5>#1</h5>
      <h1>Research Hypothesis</h1>
      <p>Given that RadioK itself has a high viewership but the podcast does not, I suspected the following:</p>
      <ul>
        <li>poor access pathways between the two</li>
        <li>an unfriendly podcast user experience </li>
      </ul>
      <p>so I set off to investigate.</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}