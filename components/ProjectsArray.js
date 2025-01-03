import GovtechCover from '../public/images/govtechCover.png';
import WtlCover from '../public/images/wtlCover.svg';
import radioKCover from '../public/images/radioKCover.svg';
import portfolioCover from '../public/images/portfolioCover.svg';
import SaseCover from '../public/images/saseCover.png';
import WamCover from '../public/images/wamCover.png';

export const ProjectsArray = [
  {
    name: "GovTech",
    imageSrc: GovtechCover,
    imageAlt: "GovTech Case Study Cover",
    bgColor: "rgba(167, 214, 201, 0.3)",
    title: 'UI/UX Design Internship',
    tags: ['UX', 'CS', 'Work'],
    hashtags: ['#Figma', '#UserTesting', '#UserInterview', '#React', '#TypeScript', '#JavaScript'],
    link: `/govtech`,
    index: 0
  },
  {
    name: "WTL",
    imageSrc: WtlCover,
    imageAlt: "WTL Case Study Cover",
    bgColor: "#FFFFFF",
    title: 'Fashion Designer App Design',
    tags: ['UX', 'Work'],
    hashtags: ['#Figma', '#Illustrator', '#Research', '#CrossUniversity'],
    link: `/wtl`,
    index: 1
  },
  {
    name: "RadioK",
    imageSrc: radioKCover,
    imageAlt: "RadioK Case Study Cover",
    bgColor: "#FFFFFF",
    title: 'Podcast Website Redesign',
    tags: ['UX', 'Client'],
    hashtags: ['#Figma', '#UserPersona', '#UserJourney'],
    link: `/radioK`,
    index: 2
  },
  {
    name: "Portfolio",
    imageSrc: portfolioCover,
    imageAlt: "Portfolio Case Study Cover",
    bgColor: "#FBF4F5",
    title: 'Portfolio Website',
    tags: ['UX', 'CS'],
    hashtags: ['#React', '#Next.js', '#TailWindCSS', '#Matter.js'],
    link: `/portfolio`,
    index: 3
  },
  {
    name: "SASE",
    imageSrc: SaseCover,
    imageAlt: "SASE Case Study Cover",
    bgColor: "rgba(205, 232, 249, 0.65)",
    title: 'Resume Database Website',
    tags: ['CS', 'School'],
    hashtags: ['#React', '#TypeScript', '#JavaScript'],
    link: `/sase`,
    index: 4
  },
  {
    name: "WAM",
    imageSrc: WamCover,
    imageAlt: "WTL Case Study Cover",
    bgColor: "#e7bfae",
    title: 'Poster Design',
    tags: ['UX', 'GDES', 'Client'],
    hashtags: ['#Illustrator', '#UserSurvey', '#UserInterview'],
    link: `/wam`,
    index: 5
  },
];