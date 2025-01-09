import { ReactElement } from "react";

interface ContentBlockProps {
  isFlexRow?: boolean;
  content1?: ReactElement;
  content2?: ReactElement;
  image1?: JSX.Element;
  image2?: JSX.Element;
  align?: string;
  isGap?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({image1, image2, content1, content2, isFlexRow = true, isGap = true, align }) => {

  return (
    <section>
      <div className={`flex flex-col ${isFlexRow ? "md:flex-row" : "md:flex-row-reverse"} ${isGap ? 'gap-6 md:gap-16' : 'gap-2 md:gap-16'} text-left ${align? align : 'items-center'}`}>
        <div className="w-full md:basis-1/2 md:max-w-[50vw]">
          {image1 && (<>{image1}</>)}
          {content1 && (<>{content1}</>)}
        </div>

        <div className={`w-full md:basis-1/2 md:max-w-[50vw] ${image2 || content2 ? 'block' : 'hidden'}`}>
          {image2 && (<>{image2}</>)}
          {content2 && (<>{content2}</>)}
        </div>
      </div>
    </section>
  )
}