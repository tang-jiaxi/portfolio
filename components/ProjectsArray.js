import GovtechCover from '@/images/govtech/govtechCover.png';
import WtlCover from '@/images/wtl/wtlCover.png';
import radioKCover from '@/images/radioK/radioKCover.webp';
import portfolioCover from '@/images/portfolio/portfolioCover.webp';
import SaseCover from '@/images/sase/saseCover.png';
import WamCover from '@/images/wam/wamCover.png';

export const ProjectsArray = [
  {
    name: "GovTech",
    imageSrc: GovtechCover,
    imageAlt: "GovTech Case Study Cover",
    blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcfu2kDwAHBgKUQJ226gAAAABJRU5ErkJggg==",
    bgColor: "rgb(229,243,239)",
    title: 'FlexiList Product Development',
    tags: ['UX', 'CS', 'Work'],
    hashtags: ['#Figma', '#UserTesting', '#UserInterview', '#React', '#TypeScript', '#JavaScript'],
    link: `/govtech`,
    index: 0
  },
  {
    name: "WTL",
    imageSrc: WtlCover,
    imageAlt: "WTL Case Study Cover",
    blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
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
    blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUkZH9DwACBwFW65P0ZAAAAABJRU5ErkJggg==",
    bgColor: "#FFFFFF",
    title: 'Podcast Website Redesign',
    tags: ['UX', 'Client'],
    hashtags: ['#Figma', '#UserPersona', '#UserJourney'],
    link: `/radioK`,
    index: 2
  },
  {
    name: "SASE",
    imageSrc: SaseCover,
    imageAlt: "SASE Case Study Cover",
    blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8++LnUgAIjQNV4RC2qwAAAABJRU5ErkJggg==",
    bgColor: "#dff0fb",
    title: 'Resume Database Website',
    tags: ['CS', 'School'],
    hashtags: ['#React', '#TypeScript', '#JavaScript'],
    link: `/sase`,
    index: 3
  },
  {
    name: "Portfolio",
    imageSrc: portfolioCover,
    imageAlt: "Portfolio Case Study Cover",
    blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/eXrfwAJuwPlz9n5zgAAAABJRU5ErkJggg==",
    bgColor: "#FBF4F5",
    title: 'Portfolio Website',
    tags: ['CS'],
    hashtags: ['#React', '#Next.js', '#TailWindCSS', '#Matter.js'],
    link: `/portfolio`,
    index: 4
  },
  {
    name: "WAM",
    imageSrc: WamCover,
    imageAlt: "WTL Case Study Cover",
    blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAuMB8DtXNJsAAAAASUVORK5CYII=",
    bgColor: "#e7bfae",
    title: 'Poster Design',
    tags: ['UX', 'GDES', 'Client'],
    hashtags: ['#Illustrator', '#UserSurvey', '#UserInterview'],
    link: `/wam`,
    index: 5
  },
];