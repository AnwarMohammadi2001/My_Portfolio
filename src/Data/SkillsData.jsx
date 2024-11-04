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
    },
    {
      name: "CSS",
      percentage: 85,
      icon: <FaCss3 />,
      path: "/path/to/css-icon.png",
    },
    { name: "JavaScript", percentage: 80, icon: <IoLogoJavascript /> },
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Bootstrap",
      percentage: 70,
      icon: <FaBootstrap />,
      path: "/path/to/bootstrap-icon.png",
    },
    {
      name: "React.js",
      percentage: 75,
      icon: <FaReact />,
      path: "/path/to/react-icon.png",
    },
    {
      name: "Vue.js",
      percentage: 70,
      icon: <FaVuejs />,
      path: "/path/to/vue-icon.png",
    },
  ],
  backend: [
    {
      name: "MySQL",
      percentage: 80,
      icon: <DiMysql />,
      path: "/path/to/mysql-icon.png",
    },
    {
      name: "MongoDB",
      percentage: 75,
      icon: <SiMongodb />,
      path: "/path/to/mongodb-icon.png",
    },
    {
      name: "Node.js",
      percentage: 70,
      icon: <FaNodeJs />,
      path: "/path/to/node-icon.png",
    },
    {
      name: "RESTful API",
      percentage: 75,
      icon: <TbApi />,
      path: "/path/to/api-icon.png",
    },
  ],
  tools: [
    {
      name: "Git",
      percentage: 85,
      icon: <FaGitAlt />,
      path: "/path/to/git-icon.png",
    },
    {
      name: "GitHub",
      percentage: 85,
      icon: <FaGithub />,
      path: "/path/to/github-icon.png",
    },
  ],
  softSkills: [
    {
      name: "VS Code",
      percentage: 90,
      icon: <VscVscode />,
      path: "/path/to/vscode-icon.png",
    },
    {
      name: "Photoshop",
      percentage: 70,
      icon: <SiAdobephotoshop />,
      path: "/path/to/photoshop-icon.png",
    },
    {
      name: "Office Package",
      percentage: 80,
      icon: <FaFileWord />,
      path: "/path/to/office-icon.png",
    },
  ],
};
