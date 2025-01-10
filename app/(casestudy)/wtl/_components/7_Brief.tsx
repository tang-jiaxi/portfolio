import { ContentBlock } from "@/components/ContentBlock";

export default function Brief() {
  const text = (
    <>
      <h5>#2</h5>
      <h1>The Design Brief That I Got</h1>
      <p>Create a design tool for fashion designers that <span className="font-bold">predicts utility of a design</span>, within the wardrobes of actual consumers. </p>
      <p>Across the consumer base, what <span className="font-bold">fraction of the existing wardrobe is compatible</span> with the designed concept?</p>
    </>
  )

  return (
    <ContentBlock
      content1={text}
    ></ContentBlock>
  )
}