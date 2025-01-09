import { ReactElement } from "react";

interface FullContentBlockProps {
  isFlexRow?: boolean;
  isFullWidth?: boolean;
  content1?: ReactElement;
  image1?: JSX.Element;
  align?: string;
  fullImage?: JSX.Element;
  fullComponent?: ReactElement;
}

export const FullContentBlock: React.FC<FullContentBlockProps> = ({image1, content1, isFlexRow = true, isFullWidth, align, fullImage, fullComponent }) => {
  return (
    <section>
      <div className={`flex flex-col ${isFlexRow ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-8 text-left ${align? align : 'items-start'}`}>
        <div className={`w-full ${isFullWidth ? `mb-4 md:mb-4` : `md:basis-1/2 mb-4 md:mb-8 md:max-w-[50vw]`}`}>
          {image1 && (<>{image1}</>)}
          {content1 && (<>{content1}</>)}
        </div>
      </div>

      <div className="w-full">
        {fullImage && (<>{fullImage}</>)}
        {fullComponent && (<>{fullComponent}</>)}
      </div>
    </section>
  )
}