import { ContentBlock } from "@/components/ContentBlock";

export default function Requirements() {
  const req1 = (
    <>
      <h5 className="text-black">Requirement #1</h5>
      <p>Display all the student information we collect at a glance. e.g. year, major</p>
      <ul style={{ listStyleType: "'✅'" }} className="mt-[0.75rem] ml-1">
        <li className="pl-2">Use a table to display information</li>
        <li className="pl-2">Filter & sort to reduce search effort</li>
      </ul>
    </>
  )

  const req2 = (
    <>
      <h5 className="text-black">Requirement #2</h5>
      <p>Easily navigate between resumes without losing sight of student information</p>
      <ul style={{ listStyleType: "'✅'" }} className="mt-[0.75rem] ml-1">
        <li className="pl-2">Custom PDF viewer that allows for easy navigation between resumes</li>
        <li className="pl-2">Responsive: PDF viewer opens to the side in desktop, and full-screen on mobile</li>
      </ul>
    </>
  )
  
  return (
    <section>
      <h5>#2</h5>
      <h1>Think of Design Requirements</h1>
      <p className="md:mb-12">A simple one page website is enough to handle our needs. But what should our website feature?</p>
      <ContentBlock
        content1={req1}
        content2={req2}
        align="items-start"
      ></ContentBlock>
    </section>
  )
}