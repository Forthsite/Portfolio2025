export interface Translation {
  hero: TextBlock;
}

export interface TextBlock {
  heading: string;
  subheading: string;
  p: string;
  CTA: string;
}

export const translations = {
  cs: {
    hero: {
      heading: "lorem ipsum dolor sit amet",
      subheading: "lorem ipsum dolor sit amet",
      p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi et, molestiae sint illum vitae quisquam recusandae quod labore laborum?",
      CTA: "Lorem ipsum",
    },
  },
  en: {
    hero: { heading: "hi", subheading: "subheading", p: "long text" },
  },
};
