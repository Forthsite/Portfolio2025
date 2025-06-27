import type { TextBlock } from "../data/translations";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactProps {
  texts: TextBlock;
}

const Contact = ({ texts }: ContactProps) => {
  return (
    <>
      <h1 className="text-center md:text-left text-3xl font-extrabold my-8">
        {texts.heading}
      </h1>
      <div className="flex flex-col items-center gap-8">
        <span className="text-2xl font-semibold transition-all hover:text-blue-500">
          <a href="mailto:patrik.blazek1@gmail.com">patrik.blazek1@gmail.com</a>
        </span>
        <span className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/patrik-bla%C5%BEek-442b20268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-12 h-12 transition-all hover:text-[#0a66c2]" />
          </a>
          <a
            href="https://github.com/paca208"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-12 h-12 transition-all hover:text-black" />
          </a>
        </span>
        <button className="bg-[#1e66f5] w-fit p-3 rounded-2xl text-[#eff1f5] cursor-pointer transition-all hover:scale-105 hover:bg-blue-500/90">
          {texts.subheading}
        </button>
      </div>
    </>
  );
};

export default Contact;
