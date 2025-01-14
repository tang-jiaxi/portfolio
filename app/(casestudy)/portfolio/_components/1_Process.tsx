import { Timeline } from '@/components/Timeline';

export default function Process() {
  const subheading = 
  ["Inspiration",
    "Figma Mock up",
    "Develop it",
    "Future plans"
  ];

  const subheadingDescription = 
    ["Look for good ideas I can feasibly implement",
      "Layout my case studies",
      "Experimenting with different libraries",
      "Areas of improvement"
    ];

  return(
    <Timeline
      heading="Development Process"
      description="How might I showcase my work across 3 fields in a readable and engaging way?"
      color="bg-red-dark"
      subheading={subheading}
      subheadingDescription={subheadingDescription}
    ></Timeline>
  )
}