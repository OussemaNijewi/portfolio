const words = [
  { text: "Qt", imgPath: `${import.meta.env.BASE_URL}images/Qt.svg` },
  {
    text: "Unreal Engine",
    imgPath: `${import.meta.env.BASE_URL}images/UnrealEngine.svg`,
  },
  { text: "C++", imgPath: `${import.meta.env.BASE_URL}images/CppLogo.svg` },
  {
    text: "Android Auto",
    imgPath: `${import.meta.env.BASE_URL}images/Android_Auto_icon.svg`,
  },
  {
    text: "AOSP",
    imgPath: `${import.meta.env.BASE_URL}images/android-icon.svg`,
  },
  { text: "Kotlin", imgPath: `${import.meta.env.BASE_URL}images/Kotlin.svg` },
  {
    text: "Git",
    imgPath: `${import.meta.env.BASE_URL}images/git-scm-icon.svg`,
  },
  {
    text: "Jira",
    imgPath: `${import.meta.env.BASE_URL}images/atlassian_jira-icon.svg`,
  },
];

const navLinks = [
  {
    name: "Work Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact me",
    link: "#contact",
  },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
];

const techStackImgs = [
  {
    name: "Unreal Engine",
    imgPath: `${import.meta.env.BASE_URL}images/UnrealEngine.svg`,
  },
  { name: "C++", imgPath: `${import.meta.env.BASE_URL}images/CppLogo.svg` },
  {
    name: "Android Auto",
    imgPath: `${import.meta.env.BASE_URL}images/Android_Auto_icon.svg`,
  },
  { name: "AOSP", imgPath: `${import.meta.env.BASE_URL}images/aosp.png` },
  { name: "Kotlin", imgPath: `${import.meta.env.BASE_URL}images/Kotlin.svg` },
  { name: "Node", imgPath: `${import.meta.env.BASE_URL}images/node.svg` },
  {
    name: "React Native",
    imgPath: `${import.meta.env.BASE_URL}images/react.svg`,
  },
  { name: "JavaScript", imgPath: `${import.meta.env.BASE_URL}images/js.svg` },
  { name: "GitHub", imgPath: `${import.meta.env.BASE_URL}images/github.svg` },
  {
    name: "Jira",
    imgPath: `${import.meta.env.BASE_URL}images/atlassian_jira-icon.svg`,
  },
  {
    name: "Confluence",
    imgPath: `${import.meta.env.BASE_URL}images/confluence.svg`,
  },
];
const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nijewi-oussema",
    icon: `${import.meta.env.BASE_URL}images/linkedin.svg`,
  },
  {
    name: "GitHub",
    link: "https://github.com/OussemaNijewi",
    icon: `${import.meta.env.BASE_URL}images/github.svg`,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: `${import.meta.env.BASE_URL}images/instagram.svg`,
  },
];

const expCards = [
  {
    review:
      "Oussema brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    Tools: "Unreal Engine - Oculus Quest 2 - C++",
    company: "University of Ottawa",
    modelPath: `${import.meta.env.BASE_URL}models/oculus_quest_2-transformed.glb`,
    title: "Software Developer / Work Study Program",
    scale: 6,
    rotation: [-0.3, 0.3, 0],
    date: "May 2025 - October 2025",
    responsibilities: [
      "Developed a VR app for Oculus Quest 2 to simulate proprioception reflex experiments with guided user interactions.",
      "Implemented 3D vector-based kinematic calculations using controller and joint coordinates to measure arm movement angles (within 2° error).",
      "Designed a checkpoints system to manage game session progress across multiple trial conditions (visual aid vs non-visual aid, dominant vs non-dominant arm, timed delays).",
      "Stored experiment data in C++ structs and generated formatted email reports sent to users using the EasyMail Unreal Engine plugin.",
    ],
  },
  {
    review:
      "Oussema's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (Android Auto - Java/Kotlin)",
    company: "Ford Motors Company of Canada",
    modelPath: `${import.meta.env.BASE_URL}models/shelby_427_cobra-transformed.glb`,
    scale: 150,
    title: "Software Developer Intern / CO-OP",
    rotation: [0.4, 0.9, 0],
    date: "May 2024 - August 2024",
    responsibilities: [
      "Implemented UI components for driver account setup, improving users onboarding experience.",
      "Implemented unit tests using JUnit, achieving 80% code coverage tracked with SonarQube.",
      "Identified codebase maintainability issues during unit testing and proposed a refactoring initiative, which was approved and assigned to me as a dedicated internship project",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (Unreal Engine - C++)",
    company: "Ford Motors Company of Canada",
    modelPath: `${import.meta.env.BASE_URL}models/ford_mustang_gtd-transformed.glb`,
    title: "Software Developer Intern / CO-OP",
    scale: 120,
    rotation: [0.4, 0.9, 0],
    date: "May 2023 - December 2023",
    responsibilities: [
      "Refactored blueprint graphs to C++ to improve runtime performance.",
      "Resolved a critical input handling bug where button presses were not canceled when touch capture exited button bounds, preventing unintended click events.",
      "Debugged floating-point precision errors in lap time display caused by conversion and rounding errors, eliminating ±1 ms inconsistencies.",
      "Supported the final release of the MyMustang app by debugging production issues and refactoring code to improve code maintainability.",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (QT/QML - C++)",
    company: "Ford Motors Company of Canada",
    modelPath: `${import.meta.env.BASE_URL}models/ford_gt-transformed.glb`,
    title: "Software Developer Intern / CO-OP",
    scale: 120,
    rotation: [0.4, 0.9, 0],
    date: "September 2022 - April 2023",
    responsibilities: [
      "Resolved customer-reported localization defects by correcting translation strings and fixing formatting issues.",
      "Updated UI components to align with new design requirements, ensuring visual consistency.",
      "Contributed to maintenance of a legacy codebase, working within Agile/Scrum workflows while debugging issues and using version control in a large-scale environment.",
    ],
  },
];

export { words, navLinks, logoIconsList, expCards, techStackImgs, socialLinks };
