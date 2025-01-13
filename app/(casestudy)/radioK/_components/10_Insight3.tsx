import { ContentBlock } from "@/components/ContentBlock";

export default function Insight3() {
  const text = (
    <>
      <h1>Insight 3</h1>
      <p>Users prefer listening on apps rather than browsers.</p>
      <blockquote>
        Podcast apps have significantly higher audience engagement and retention rate than web browsers.
        <cite>— Pacific Content, 2019</cite>
      </blockquote>
      <blockquote>
        50% of users prefer finding new podcasts within the podcast app they listen to.
        <cite>— The Podcast Host, 2024</cite>
      </blockquote>
    </>
  )

  return (
    <ContentBlock
      content1={text}
      isFlexRow={false}
    ></ContentBlock>
  )
}