import { Timeline } from '@/components/Timeline';

export default function GovtechTimeline() {
  const subheading = 
  ["Research",
    "User Interview",
    "UI/UX Design",
    "Frontend Development"
  ];

  const subheadingDescription = 
    ["Consolidate and analyze existing user research",
      "Gather new info to guide project & design direction",
      "Prototyping designs and user testing",
      "Implement designs and push to production"
    ];

  return(
    <Timeline
      heading="Project Timeline"
      description="In an increasingly data-driven world, how could we enhance FlexiList to encourage a data-driven approach in schools?"
      color="bg-opaque-green-govtech"
      subheading={subheading}
      subheadingDescription={subheadingDescription}
    ></Timeline>
  )
}