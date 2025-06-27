export interface Translation {
  lang: string;
  hero: TextBlock;
  projects: TextBlock;
  skills: TextBlock;
  contact: TextBlock;
  footer: TextBlock;
}

export interface TextBlock {
  heading?: string;
  subheading?: string;
  p?: string;
  CTA?: string;
}

export const translations = {
  cs: {
    lang: "cs",
    hero: {
      heading: "Ahoj! Jmenuji se Patrik",
      subheading: "Fullstack Web Developer",
      p: "Vývoji webových stránek a aplikací jsem se začal ve volném čase věnovat v roce 2022. V následujícím roce jsem začal pracovat na prvních komerčních projektech pro klienty firmy Forthsite. Rád tvořím, zkouším nové přístupy a neustále se učím něco nového. Jsem zvídavý, soutěživý, klidný perfekcionista, který se neustále snaží zlepšovat. Když zrovna nesedím u editoru, nejradši trávím čas plaváním, hraním her nebo sledováním esportu.",
      CTA: "Kontaktuj mě",
    },
    projects: {
      heading: "Vybrané Projekty",
    },
    skills: {
      heading: "Nástroje & Dovednosti",
    },
    contact: {
      heading: "Kontakt",
      subheading: "CV ke stažení",
    },
    footer: {
      p: "Všechna práva vyhrazena.",
    },
  },

  en: {
    lang: "en",
    hero: {
      heading: "Hi! I'm Patrik",
      subheading: "Fullstack Web Developer",
      p: "I started developing websites and applications in my free time back in 2022. The following year, I began working on my first commercial projects for clients of the company Forthsite. I enjoy creating, experimenting with new approaches, and constantly learning something new. I’m a curious, competitive, calm perfectionist who’s always striving to improve. When I’m not sitting in front of the editor, I enjoy swimming, playing games, or watching esports.",
      CTA: "Contact Me",
    },
    projects: {
      heading: "Chosen Projects",
    },
    skills: {
      heading: "Tools & Skills",
    },
    contact: {
      heading: "Contact",
      subheading: "Download CV",
    },
    footer: {
      p: "All rights reserved.",
    },
  },
};
