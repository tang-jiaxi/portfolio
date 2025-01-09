interface TimelineProps{
  heading: string;
  description: string;
  color: string;
  subheading: string[];
  subheadingDescription: string[];
}

export const Timeline: React.FC<TimelineProps> = ({heading, description, color, subheading, subheadingDescription}) => {  
  return (
    <div className="max-w-fit">
      <div className="flex flex-col footer:flex-row footer:justify-between">
        <h1 className="footer:basis-1/3">{heading}</h1>
        <p className="footer:basis-2/3 mt-0">{description}</p>
      </div>

      <div className="flex flex-row justify-between my-8 md:my-14">
      {subheading.map((_, index) => (
        <div key={index} className="relative flex flex-row w-full">
          <div className={`absolute justify-self-start left-1/3 -translate-y-1/2 w-5 h-5 ${color} rounded-full z-10`}></div>
          {index < subheading.length - 1 && (
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 bg-grey-light w-full h-[2px] z-0"></div>
          )}
        </div>
      ))}
      </div>

      <div  className="flex flex-col footer:flex-row justify-between gap-2 footer:gap-4 max-w-fit">
        {subheading.map((subheading, index) => (
          <div key={index} className="basis-1/4">
            <h5 className="hidden footer:block text-black">{subheading}</h5>
            <h5 className="visible footer:hidden text-black">{`${index + 1}. ${subheading}`}</h5>
            <p className={`mt-0 ${index == subheading.length - 1 ? 'mb-0' : ''}`}>{subheadingDescription[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}