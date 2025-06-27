import type { Translation } from "../data/translations";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

interface PortfolioProps {
  translation: Translation;
}

const Portfolio = ({ translation }: PortfolioProps) => {
  return (
    <div className="flex flex-col px-[8%] lg:px-[12%] gap-24 py-8 bg-[#eff1f5] text-[#4c4f69]">
      <Header />
      <main className="flex flex-col gap-12">
        <Hero texts={translation.hero} />
        <Projects translation={translation} />
        <Skills texts={translation.skills} />
        <Contact texts={translation.contact} />
      </main>
      <Footer texts={translation.footer} />
    </div>
  );
};
export default Portfolio;
