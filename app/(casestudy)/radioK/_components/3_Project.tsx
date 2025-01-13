import { ContentBlock } from "@/components/ContentBlock";

export default function Project() {
  const text = (
    <>
      <h1>Project Scope</h1>
      <p>The Real College Podcast receives significantly less user engagement than RadioK itself, despite it being hosted by the same team.</p>
      <p className="font-bold mb-0">Goals</p> 
      <ul>
        <li>Redirect RadioK listeners to Real College Podcast</li>
        <li>Keep to the podcast&apos;s current branding identity</li>
        <li>Minimize technical changes</li>
      </ul>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}