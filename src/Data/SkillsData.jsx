import { FaUser } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFileWord,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";

export const skillsData = {
  frontend: [
    {
      name: "HTML",
      percentage: 90,
      icon: <FaHtml5 />,
      color: "#E34F26", // HTML orange
    },
    {
      name: "CSS",
      percentage: 85,
      icon: <FaCss3 />,
      color: "#1572B6", // CSS blue
    },
    {
      name: "JavaScript",
      percentage: 80,
      icon: <IoLogoJavascript />,
      color: "#F7DF1E", // JavaScript yellow
    },
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: <RiTailwindCssFill />,
      color: "#38B2AC", // Tailwind teal
    },
    {
      name: "Bootstrap",
      percentage: 70,
      icon: <FaBootstrap />,
      color: "#7952B3", // Bootstrap purple
    },
    {
      name: "React.js",
      percentage: 75,
      icon: <FaReact />,
      color: "#61DAFB", // React cyan
    },
    {
      name: "Vue.js",
      percentage: 70,
      icon: <FaVuejs />,
      color: "#4FC08D", // Vue green
    },
  ],
  backend: [
    {
      name: "MySQL",
      percentage: 80,
      icon: <DiMysql />,
      color: "#00758F", // MySQL blue
    },
    {
      name: "MongoDB",
      percentage: 75,
      icon: <SiMongodb />,
      color: "#47A248", // MongoDB green
    },
    {
      name: "Node.js",
      percentage: 70,
      icon: <FaNodeJs />,
      color: "#339933", // Node.js green
    },
    {
      name: "RESTful API",
      percentage: 75,
      icon: <TbApi />,
      color: "#6E757C", // API neutral gray
    },
  ],
  tools: [
    {
      name: "Git",
      percentage: 85,
      icon: <FaGitAlt />,
      color: "#F05032", // Git orange
    },
    {
      name: "GitHub",
      percentage: 85,
      icon: <FaGithub />,
      color: "#181717", // GitHub black
    },
  ],
  softSkills: [
    {
      name: "VS Code",
      percentage: 90,
      icon: <VscVscode />,
      color: "#007ACC", // VS Code blue
    },
    {
      name: "Photoshop",
      percentage: 70,
      icon: <SiAdobephotoshop />,
      color: "#31A8FF", // Photoshop blue
    },
    {
      name: "Office Package",
      percentage: 80,
      icon: <FaFileWord />,
      color: "#D83B01", // Office red
    },
  ],
};
