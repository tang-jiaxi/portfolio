import { ContentBlock } from "@/components/ContentBlock";

export default function Project() {
  const text = (
    <>
      <h1>Project Scope</h1>
      <p>Weisman Art Museum receives low visitorship, despite being in a high traffic location and having free admission for all.</p>
      <p className="font-bold mb-0">Goals</p> 
      <p className="mb-0">Create a banner that:</p>
      <ul>
        <li>Promotes long-term visitorship</li>
        <li>Encourages students to visit for more than just the art e.g. studying, hanging out</li>
      </ul>
    </>
  )

  const quote = (
    <div className="flex flex-col gap-4 md:gap-6">
      <blockquote>
        &quot;Marketing Weisman has been difficult as our email lists have been shortened due to system change.&quot;
        <cite>– Weisman management</cite>
      </blockquote>
      <blockquote>
        &quot;Building [while iconic] may look intimidating for others and students don&apos;t know about free admission.&quot;
        <cite>– Weisman management</cite>
      </blockquote>
    </div>
  )

  return (
    <ContentBlock
      content1={text}
      content2={quote}
      isFlexRow={false}
    ></ContentBlock>
  )
}