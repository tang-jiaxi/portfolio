
export default function Timeline() {
  const subheading = 
  ["Research",
    "Prototype",
    "Develop",
    "Testing"
  ];

  const subheadingDescription = 
    ["Verify problem and layout project direction",
      "Rapidly iterate on a testable prototype",
      "Implement the solution",
      "Assess financial feasibility"
    ];

  return(
    <div>
      <div className="flex flex-col footer:flex-row footer:justify-between">
        <h1 className="footer:basis-1/3">Project Timeline</h1>
        <p className="footer:basis-2/3 mt-0">How might we reimagine the design process to minimize finished-product waste using augmented design intelligence?</p>
      </div>

      {/* Line */}
      <div className="flex flex-row justify-between my-8 footer:mb-14 mt-28 footer:mt-32 [@media(min-width:528px)]:mt-[120px]">
      {subheading.map((_, index) => (
        <div key={index} className="relative flex flex-row w-full">
          <div className={`absolute justify-self-start left-1/3 -translate-y-1/2 w-6 h-6 ${index < 2 ? `bg-[#A3A6AC]` : `bg-[#CCD0D7]`} rounded-full z-10`}></div>
          { index < 2 ? ( 
              <div>
                <p
                  className="absolute left-[83.33%] -translate-y-full pb-20 min-w-20 -translate-x-8 [@media(min-width:528px)]:-translate-x-1/2 w-fit text-center [@media(min-width:528px)]:text-nowrap z-0">
                    {index == 0 ? "Where I joined" : "Where we ended"}
                </p>
                <div className="absolute justify-self-start left-[83.33%] -translate-y-16 translate-x-[7px] w-[2px] h-16 bg-[#A3A6AC] rounded-full z-0"></div>
                <div className="absolute justify-self-start left-[83.33%] -translate-y-1/2 ml-0.5 md:ml-0 w-3 h-3 md:w-4 md:h-4 bg-[#A3A6AC] rounded-full z-10"></div>
              </div>
            ):(
              <></>
            )
          }
          {index < subheading.length - 1 && (
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 bg-grey-light w-full h-[2px] z-0"></div>
          )}
        </div>
      ))}
      </div>

      {/* Text */}
      <div className="flex flex-col footer:flex-row justify-between gap-2 footer:gap-4 max-w-fit">
        {subheading.map((subheading, index) => (
          <div key={index} className="basis-1/4">
            <h5 className="hidden footer:block text-black">{subheading}</h5>
            <h5 className="visible footer:hidden text-black">{`${index + 1}. ${subheading}`}</h5>
            <p className={`mt-0 ${index == subheading.length - 1 ? 'mb-0' : ''}`}>{subheadingDescription[index]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}