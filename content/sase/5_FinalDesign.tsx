import { ContentWrapper } from "@/components/ContentWrapper";
import { ImageCaption } from "@/components/ImageCaption";
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
    <section>
    {text}
      <ContentWrapper>
        <ImageCaption image={toggleVideo} caption="Open resume PDFs (desktop)"/>
        <ImageCaption image={filterVideo} caption="Sort and filter (desktop)"/>
        <ImageCaption image={responsiveVideo} caption="Responsive design (desktop and mobile)"/>
      </ContentWrapper>
    </section>
  )
}