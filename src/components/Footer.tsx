import type { TextBlock } from "../data/translations";

interface FooterProps {
  texts: TextBlock;
}

const Footer = ({ texts }: FooterProps) => {
  return (
    <footer className="flex flex-col md:flex-row w-full justify-center text-center gap-4 md:gap-12">
      <span>Patrik Blažek · 2025</span>
      <span>{texts.p}</span>
    </footer>
  );
};
export default Footer;
