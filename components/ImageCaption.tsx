interface ImageCaptionProps {
  image?: JSX.Element;
  caption: string;
}

export const ImageCaption: React.FC<ImageCaptionProps> = ({image, caption}) => {
  return (
    <div className="flex flex-col items-center gap-1 md:gap-3">
      {image}
      <small className="text-center">{caption}</small>
    </div>
  )
}