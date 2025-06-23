import { FaCaretDown } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Lorem ipsum</h1>
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <h2 className="text-2xl font-extrabold">2025</h2>
        <span className="flex w-full bg-black h-2 rounded-2xl"></span>
        <FaCaretDown className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Projects;
