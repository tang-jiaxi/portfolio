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
      description="How can we inspire recruiters to connect with our students by providing a user-friendly overview of their profiles?"
      color="bg-opaque-blue-sase"
      subheading={subheading}
      subheadingDescription={subheadingDescription}
    ></Timeline>
  )
}