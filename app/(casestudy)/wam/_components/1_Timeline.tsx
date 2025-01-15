import { Timeline } from '@/components/Timeline';

export default function WAMTimeline() {
  const subheading = 
  ["Investigate",
    "Research",
    "UI/UX Design",
    "Final Design"
  ];

  const subheadingDescription = 
    ["Learn about the problem",
      "User interviews and surveys",
      "UI Moodboard",
      "Decide what information to include"
    ];

  return(
    <Timeline
      heading="Project Timeline"
      description="How might we encourage students to step into Weisman, and keep them coming back in the long term?"
      color="bg-pink-wam"
      subheading={subheading}
      subheadingDescription={subheadingDescription}
    ></Timeline>
  )
}