import type { Project } from "../components/About";

export const projects: Project[] = [
  {
    id: "0",
    title: "Altmall",
    description:
      "A responsive e-commerce application built to enable customers purchase the product of their choice with the option to pay instalmentally or at once.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCss",
      "Styled-Components",
      "Redux-toolkit",
      "Re-Charts",
    ],
    link: "https://altmall.ng/",
    // repo: "#",
    image: "/src/assets/altmall.jpeg",
  },
  {
    id: "1",
    title: "Digisphire",
    description:
      "A responsive event and conference organizer platform. Digisphire showcases various international summits focused on digital transformation across multiple industries.",
    tags: ["NextJs", "TypeScript", "TailwindCss", "React Query", "Flowbite"],
    link: "https://www.digisphire.com/",
    // repo: "#",
    image: "/src/assets/digisphire.png",
  },
  {
    id: "2",
    title: "Laddr",
    description:
      "LaddrChess is a gamified learning platform that helps you progress from beginner to mastery in chess through fun, interactive lessons, puzzles, and AI-driven training. It is a duolingo for Chess.",
    tags: ["React", "TypeScript", "TailwindCss", "Redux", "Framer-motion"],
    link: "https://www.digisphire.com/",
    // repo: "#",
    image: "/src/assets/laddr.png",
  },

  {
    id: "3",
    title: "VSured Community",
    description:
      "Emerging fintech start-up from Sub-Saharan Africa with an integrated security solution that leverages technology & VAS",
    tags: ["React", "TypeScript", "TailwindCss", "Localization", "Redux"],
    link: "https://community.vsured.com",
    // repo: "#",
    image: "/src/assets/vsured.png",
  },
];
