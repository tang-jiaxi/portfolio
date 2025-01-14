import { ContentBlock } from "@/components/ContentBlock";

export default function JourneyMap() {

  const findings = (
    <>
      <h1 className="mb-3">Key Design Opportunities To Include</h1>
      <ul>
        <li>Overview of topics</li>
        <li>Highlight past podcasts</li>
        <li>Easily viewable podcast description</li>
        <li>Search function</li>
        <li>Information about the hosts</li>
        <li>Suggest related podcasts/subtopics</li>
      </ul>
    </>
  )

  return (
    <ContentBlock 
      content1={findings}
    />
  )
}