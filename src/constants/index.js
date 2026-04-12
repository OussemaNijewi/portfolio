import { exp } from "three/tsl";

const words = [
  { text: "Qt", imgPath: "/images/Qt.svg" },
  { text: "Unreal Engine", imgPath: "/images/UnrealEngine.svg" },
  { text: "C++", imgPath: "/images/CppLogo.svg" },
  { text: "Android Auto", imgPath: "/images/Android_Auto_icon.svg" },
  { text: "AOSP", imgPath: "/images/android-icon.svg" },
  { text: "Kotlin", imgPath: "/images/Kotlin.svg" },
  { text: "Git", imgPath: "/images/git-scm-icon.svg" },
  { text: "Jira", imgPath: "/images/atlassian_jira-icon.svg" },
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

const expCards = [
  {
    review:
      "Oussema brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    Tools: "Unreal Engine - Oculus Quest 2 - C++",
    company: "University of Ottawa",
    modelPath: "/models/oculus_quest_2-transformed.glb",
    title: "Software Developer",
    scale: 6,
    rotation: [-0.3, 0.3, 0],
    date: "May 2025 - October 2025",
    responsibilities: [
      "Developed a standalone VR app using Unreal Engine (C++) targeting Oculus Quest 2 (Android APK) for the Faculty of Human Kinetics to simulate a Sensory Processing lab.",
      "Implemented real-time controller and arm motion tracking using Quest 2 input hardware tracking angles with less than 2° margin of error, providing students with precise data.",
      "Designed and implemented a data logging pipeline, serializing data to JSON and securely transmitting it via HTTPS from the headset to a Node.js server.",
      "Implemented a backend service that receives uploaded serialized data, processes and formats it, and delivers results to the corresponding user email.",
    ],
  },
  {
    review:
      "Oussema's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (Android Auto - Java/Kotlin)",
    company: "Ford Motors Company of Canada",
    modelPath: "/models/shelby_427_cobra-transformed.glb",
    scale: 150,
    title: "Software Developer Intern/CO-OP",
    rotation: [0.4, 0.9, 0],
    date: "May 2024 - August 2024",
    responsibilities: [
      "Implemented UI components for the Setup Wizard App guiding users through first-time vehicle configuration (account setup, preferences, and system customization).",
      "Implemented screen-by-screen workflow logic, customizing AOSP Setup Wizard flows to deliver a Ford-branded user experience aligned with internal Figma designs.",
      "Implemented unit tests increasing code coverage from 0% to 62% tracked using SonarQube.",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (Unreal Engine - C++)",
    company: "Ford Motors Company of Canada",
    modelPath: "/models/ford_mustang_gtd-transformed.glb",
    title: "Software Developer Intern/CO-OP",
    scale: 120,
    rotation: [0.4, 0.9, 0],
    date: "May 2023 - December 2023",
    responsibilities: [
      "Refactored blueprint logic to C++ to improve maintainability and performance.",
      "Fixed a critical input bug where button presses were not canceled when a user slid their finger outside the button bounds by modifying finger capture logic preventing unintended click events.",
      "Debugged and fixed floating-point precision errors in lap time display caused by conversion and rounding issues, eliminating rounding inconsistencies of ±1 ms.",
      "Supported the final release of the MyMustang app by debugging production issues and refactoring systems for improved maintainability.",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (QT/QML - C++)",
    company: "Ford Motors Company of Canada",
    modelPath: "/models/ford_gt-transformed.glb",
    title: "Software Developer Intern/CO-OP",
    scale: 120,
    rotation: [0.4, 0.9, 0],
    date: "September 2022 - April 2023",
    responsibilities: [
      "Resolved customer-reported localization defects in production infotainment systems UIs by updating translation resources and correcting string formatting.",
      "Updated UI assets to meet new design requirements, maintaining visual consistency across the deployed infotainment systems.",
      "Contributed to the maintenance of a legacy project, learning Agile/Scrum workflows, build processes, debugging techniques, and version control in a large code-base.",
    ],
  },
];

export { words, navLinks, logoIconsList, expCards };
