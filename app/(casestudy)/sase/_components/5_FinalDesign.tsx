import { ContentWrapper } from "@/components/ContentWrapper";
import { FullContentBlock } from "@/components/FullContentBlock";
import websiteScreenshot from "@/images/sase/website.webp";
import Image from "next/image";

export default function FinalDesign() {
  const text = (
    <div>
      <h1>Final Design</h1>
      <p>Check out a live version of the&nbsp;
        <a href="https://tang-jiaxi.github.io/saseTalentNetwork/" target="_blank" style={{textDecoration: "underline", font: "inherit"}}>
          website with dummy values
        </a> 
        &nbsp;or the&nbsp;
        <a href="https://github.com/tang-jiaxi/saseTalentNetwork" target="_blank" style={{textDecoration: "underline", font: "inherit"}}>
          GitHub repository
        </a> 
        .
      </p>
    </div>
  )

  const toggleText = (
    <div>
      <h5 className="text-black">Open resumes</h5>
      <p>Desktop</p>
    </div>
  )

  const filterText = (
    <div>
      <h5 className="text-black">Sort and filter resumes</h5>
      <p>Desktop</p>
    </div>
  )

  const responsiveText = (
    <div>
      <h5 className="text-black">Responsive design</h5>
      <p>Desktop → Mobile</p>
    </div>
  )

  const toggleVideo = (
    <video 
      autoPlay 
      loop 
      playsInline 
      controls 
      muted 
      title="Open custom PDF viewer on desktop"
      className="border border-gray-dark"
    >      
      <source src="/videos/sase/saseOpenPDF.mp4" type="video/mp4"/>
      <Image src={websiteScreenshot} alt="Video failed to load, showing static screenshot of website instead"/>
    </video>
  )

  const filterVideo = (
    <video 
      autoPlay 
      loop 
      playsInline 
      controls 
      muted 
      title="Open custom PDF viewer on desktop"
      className="border border-gray-dark"
    >      
      <source src="/videos/sase/saseFilter.mp4" type="video/mp4"/>
      <Image src={websiteScreenshot} alt="Video failed to load, showing static screenshot of website instead"/>
    </video>
  )

  const responsiveVideo = (
    <video 
      autoPlay 
      loop 
      playsInline 
      controls 
      muted 
      title="Open custom PDF viewer on desktop"
      className="border border-gray-dark"
    >
      <source src="/videos/sase/saseResponsiveDesign.mp4" type="video/mp4"/>
      <Image src={websiteScreenshot} alt="Video failed to load, showing static screenshot of website instead"/>
    </video>
  )


  return (
    <ContentWrapper>
      {text}
      <FullContentBlock isFullWidth content1={toggleText} fullImage={toggleVideo}/>
      <FullContentBlock isFullWidth content1={filterText} fullImage={filterVideo}/>
      <FullContentBlock isFullWidth content1={responsiveText} fullImage={responsiveVideo}/>
    </ContentWrapper>
  )
}