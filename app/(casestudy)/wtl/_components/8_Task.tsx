import { ContentBlock } from "@/components/ContentBlock";

export default function Task() {
  const text = (
    <>
      <h1>What My Task Really Was</h1>
      <p>I wasn’t just a designer, but also a pilot that helped my team navigate muddy waters.</p>
      <ul>
        <li>Understand the project and turn ideas into concrete features</li>
        <li>Ask questions that solidify the team’s vision</li>
        <li>Be unafraid to constantly present new ideas and revise them based on feedback</li>
      </ul>
    </>
  )

  const quote = (
    <blockquote>
      Can we predict the ultility of a design concept before we produce it?
      <cite>— Summary of the design brief</cite>
    </blockquote>
  )

  return (
    <ContentBlock
      content1={text}
      content2={quote}
      isFlexRow={false}
    ></ContentBlock>
  )
}