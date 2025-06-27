import type { Translation } from "../data/translations";
import Year from "./Year";
interface ProjectsProps {
  translation: Translation;
}

const Projects = ({ translation }: ProjectsProps) => {
  return (
    <div>
      <h1 id="projects" className="text-3xl font-extrabold my-8">
        {translation.projects.heading}
      </h1>
      <Year year={2025} lang={translation.lang} />
      <Year year={2024} lang={translation.lang} />
      <Year year={2023} lang={translation.lang} />
    </div>
  );
};

export default Projects;
