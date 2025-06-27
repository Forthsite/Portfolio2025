import type { TextBlock } from "../data/translations";
import headshot from "../assets/me.jpg";

interface HeroProps {
  texts: TextBlock;
}

const Hero = ({ texts }: HeroProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-semibold">{texts.heading}</h1>
          <h2 className="text-5xl font-semibold text-[#1e66f5]">
            {texts.subheading}
          </h2>
        </div>
        <p className="text-[#5c5f77] my-8">{texts.p}</p>
        <a href="#contact">
          <button className="bg-[#1e66f5] w-fit p-3 rounded-2xl text-[#eff1f5] cursor-pointer transition-all hover:scale-105 hover:bg-blue-500/90">
            {texts.CTA}
          </button>
        </a>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={headshot} alt="Patrik Blažek" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;
