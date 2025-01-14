import { FullContentBlock } from "@/components/FullContentBlock";

export default function AfterSomeTime() {
  const text = (
    <>
      <h5>After some time programming...</h5>
      <h1>This website is the end-result!</h1>
      <p>Feel free to check out the&nbsp; 
        <a href="https://github.com/tang-jiaxi/portfolio" target="_blank" style={{textDecoration: "underline", font: "inherit"}}>
          GitHub repository
        </a>
        &nbsp;and stay tuned for updates as I&apos;m constantly improving the site!
      </p>
    </>
  )

  return (
    <FullContentBlock
      content1={text}
      isFlexRow={false}
    ></FullContentBlock>
  )
}