import { ContentBlock } from "@/components/ContentBlock";

export default function Insight2() {
  const text = (
    <>
      <h1>Insight 2</h1>
      <p>Users are confused by the podcast&apos;s lack of theme.</p>
      <blockquote>&quot;It seems like a mix of everything for things surrounding college. Kind of confused about the theme.&quot;</blockquote>
      <blockquote>&quot;There&apos;s a lot of different things going on. The content is very confusing and not cohesive.&quot;</blockquote>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}