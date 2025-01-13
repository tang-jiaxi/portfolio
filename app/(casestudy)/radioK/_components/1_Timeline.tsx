import { Timeline } from '@/components/Timeline';

export default function RadioKTimeline() {
  const subheading = 
  ["Investigate",
    "Research",
    "UI/UX Design",
    "Final Design"
  ];

  const subheadingDescription = 
    ["Pain points",
      "Stakeholder meetings & user interviews",
      "User persona, Journey Map, Moodboard",
      "Explaining design decisions"
    ];

  return(
    <Timeline
      heading="Project Timeline"
      description="How might we update Real College Podcast&apos;s webpage navigation experience to increase its engagement?"
      color="bg-blue-radiok"
      subheading={subheading}
      subheadingDescription={subheadingDescription}
    ></Timeline>
  )
}