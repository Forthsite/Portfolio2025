import type { TextBlock } from "../data/translations";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiFramer,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiWebpack,
  SiAdobeillustrator,
  SiNginx,
} from "react-icons/si";
import SkillsCard from "./SkillsCard";

interface SkillsProps {
  texts: TextBlock;
}

export type SkillItem = {
  name: string;
  icon: React.JSX.Element;
};

const Skills = ({ texts }: SkillsProps) => {
  const FE: SkillItem[] = [
    { name: "HTML", icon: <FaHtml5 className="w-8 h-8" /> },
    { name: "CSS", icon: <FaCss3 className="w-8 h-8" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="w-8 h-8" /> },
    { name: "Javascript", icon: <IoLogoJavascript className="w-8 h-8" /> },
    { name: "Typescript", icon: <BiLogoTypescript className="w-8 h-8" /> },
    { name: "React", icon: <FaReact className="w-8 h-8" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-8 h-8" /> },
  ];
  const BE: SkillItem[] = [
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
    { name: "Express", icon: <SiExpress className="w-8 h-8" /> },
    { name: "Nginx", icon: <SiNginx className="w-8 h-8" /> },
    { name: "Javascript", icon: <IoLogoJavascript className="w-8 h-8" /> },
    { name: "Typescript", icon: <BiLogoTypescript className="w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
    { name: "GraphQL", icon: <SiGraphql className="w-8 h-8" /> },
  ];
  const Misc: SkillItem[] = [
    { name: "Webpack", icon: <SiWebpack className="w-8 h-8" /> },
    { name: "Git", icon: <FaGitAlt className="w-8 h-8" /> },
    { name: "Github", icon: <FaGithub className="w-8 h-8" /> },
    { name: "Linux", icon: <FaLinux className="w-8 h-8" /> },
    { name: "Figma", icon: <FaFigma className="w-8 h-8" /> },
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator className="w-8 h-8" />,
    },
  ];
  return (
    <div>
      <h1
        id="skills"
        className="text-center md:text-left text-3xl font-extrabold my-8"
      >
        {texts.heading}
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <SkillsCard Heading={"Frontend"} SkillArray={FE} />
        <SkillsCard Heading={"Backend"} SkillArray={BE} />
        <SkillsCard Heading={"Misc."} SkillArray={Misc} />
      </div>
    </div>
  );
};

export default Skills;
