import { Timeline } from '@/components/Timeline';

export default function Process() {
  const subheading = 
  ["Identify Problem",
    "Requirements Engineering",
    "Develop it",
    "Final Product"
  ];

  const subheadingDescription = 
    ["Access pathways and navigation experience",
      "Why and what to build",
      "Choosing a tech stack",
      "Actual website and video demonstration"
    ];

  return(
    <Timeline
      heading="Project Timeline"
      description="In an increasingly data-driven world, how could we enhance FlexiList to encourage a data-driven approach in schools?"
      color="bg-opaque-blue-sase"
      subheading={subheading}
      subheadingDescription={subheadingDescription}
    ></Timeline>
  )
}