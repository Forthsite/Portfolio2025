import { FaCaretDown } from "react-icons/fa";
import { projects } from "../data/projects";
import { useState } from "react";
import Cards from "./Cards";
interface YearProps {
  year: number;
  lang: string;
}

const Year = ({ year, lang }: YearProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(
    () => year === new Date().getFullYear()
  );
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-[5000px] lg:max-h-[2999px]" : "max-h-8"
      }`}
    >
      <div
        className={`flex items-center gap-2 hover:cursor-pointer group ${
          isOpen && "text-blue-500"
        }`}
        onClick={() => handleClick()}
      >
        <h2 className="text-2xl font-extrabold transition-all group-hover:text-blue-500">
          {year}
        </h2>
        <span
          className={`flex w-full transition-all bg-[#4c4f69] ${
            isOpen && "bg-blue-500"
          } h-1.5 rounded-2xl group-hover:bg-blue-500 `}
        ></span>
        <FaCaretDown
          className={`w-8 h-8 transition-all group-hover:text-blue-500  ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div>
        {projects
          .filter((p) => p.year === year)
          .map((p, index) => {
            const title = lang === "cs" ? p.titleCS : p.titleEN;
            const description =
              lang === "cs" ? p.descriptionCS : p.descriptionEN;

            return (
              <div
                key={index}
                className="flex flex-col xl:flex-row items-center my-16 lg:my-24 gap-12 xl:my-8"
              >
                <div className="w-full xl:w-2/5 xl:min-h-64">
                  <Cards images={p.image} />
                </div>
                <div className="w-full xl:w-3/5">
                  <h3 className="text-2xl font-extrabold">{title}</h3>
                  {description?.map((t) => {
                    if (t.type === "p") {
                      return <p className="my-2">{t.content}</p>;
                    }
                    if (t.type === "ul") {
                      return (
                        <ul>
                          {t.items.map((i) => (
                            <li className="list-disc list-inside marker:text-xl marker:text-blue-500 ">
                              {i}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                  })}
                  <div className="flex flex-wrap max-w-full">
                    {p.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex justify-center items-center text-center h-12 p-3 bg-gray-400/80 m-1 rounded-2xl text-white font-semibold w-fit hover:bg-blue-500 cursor-default transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Year;
