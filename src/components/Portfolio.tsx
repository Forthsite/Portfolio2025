import type { Translation } from "../data/translations";
import Hero from "./Hero";
import Projects from "./Projects";

interface PortfolioProps {
  translation: Translation;
}

const Portfolio = ({ translation }: PortfolioProps) => {
  return (
    <main className="flex flex-col gap-12 mx-[12%]">
      <Hero texts={translation.hero} />
      <Projects translation={translation} />
    </main>
  );
};
export default Portfolio;
