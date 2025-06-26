export interface Translation {
  lang: string;
  hero: TextBlock;
  projects: TextBlock;
}

export interface TextBlock {
  heading: string;
  subheading?: string;
  p?: string;
  CTA?: string;
}

export const translations = {
  cs: {
    lang: "cs",
    hero: {
      heading: "lorem ipsum dolor sit amet",
      subheading: "lorem ipsum dolor sit amet",
      p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi et, molestiae sint illum vitae quisquam recusandae quod labore laborum?",
      CTA: "Lorem ipsum",
    },
    projects: {
      heading: "Vybrané Projekty",
    },
  },

  en: {
    lang: "en",
    hero: {
      heading: "hi",
      subheading: "subheading",
      p: "long text",
      CTA: "lorem ipsum",
    },
    projects: {
      heading: "Chosen Projects",
    },
  },
};
