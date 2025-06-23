import type { TextBlock } from "../data/translations";
import headshot from "../assets/me.jpg";

interface HeroProps {
  texts: TextBlock;
}

const Hero = ({ texts }: HeroProps) => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-6xl font-semibold">{texts.heading}</h1>
        <h2 className="text-5xl font-semibold text-blue-500">
          {texts.subheading}
        </h2>
        <p>{texts.p}</p>
        <button className="bg-blue-500 w-fit p-3 rounded-2xl text-white cursor-pointer transition-all hover:scale-105 hover:bg-blue-500/90">
          {texts.CTA}
        </button>
      </div>
      <div className="w-1/2">
        <img src={headshot} alt="Patrik Blažek" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;
