import { ContentBlock } from "@/components/ContentBlock";

export default function Insight2() {
  const text = (
    <>
      <h1>Insight 2</h1>
      <p>Users are confused by the podcast’s lack of theme.</p>
      <blockquote>"It seems like a mix of everything for things surrounding college. Kind of confused about the theme."</blockquote>
      <blockquote>"There's a lot of different things going on. The content is very confusing and not cohesive."</blockquote>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}