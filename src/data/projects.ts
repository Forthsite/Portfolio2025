const assets: string[] = Object.values(
  import.meta.glob("../assets/projects/**/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

export interface Project {
  titleCS?: string;
  titleEN?: string;
  image: string[];
  descriptionCS?: Description[];
  descriptionEN?: Description[];
  tags: string[];
  year: number;
  link?: string;
  repo?: string;
  company: string;
}

export type Description =
  | { type: "p"; content: string }
  | { type: "ul"; items: string[] };

export const projects: Project[] = [
  {
    titleCS: "BD Olomoucká – Webová prezentace developerského projektu",
    titleEN: "BD Olomoucká – Real Estate Development Website Integration",
    image: assets.filter((i: string) => i.includes("bdolomoucka")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Na projektu BD Olomoucká jsem vytvořil komplexní webovou prezentaci včetně backend řešení pro  představení bytového domu. Při projektu jsem spolupracoval s týmem Realpad pro plynulé napojení na CRM systém (Realpad API). Web umožňuje návštěvníkům interaktivně procházet nabídku bytů s aktuálními informacemi o cenách, dispozicích, stavech jednotek a půdorysech.",
      },
      {
        type: "p",
        content: "Hlavní funkce a technologie:",
      },
      {
        type: "ul",
        items: [
          "Frontend v Reactu, přizpůsobený na míru vizuálním požadavkům developera",
          "Dynamické vykreslování jednotek pomocí SVG s interaktivními efekty (hover, tooltipy, výběr)",
          "Grafický návrh a skript pro generování prezentačních PDF karet pro jednotlivé byty",
          "Backend postavený na Node.js + Nginx, s bezpečnou komunikací a trvalým ukládáním dat",
          "Integrace Realpad API pro pravidelné načítání ceníku a detailů jednotek",
          "Caching dat z Realpad CRM do MongoDB pro rychlé načítání a minimalizaci zátěže API, dle Realpad dokumentace",
          "Napojení kontaktního formuláře na Realpad CRM s plným logováním a CAPTCHA integrací (Cloudflare turnstile)",
        ],
      },
      {
        type: "p",
        content:
          "Projekt zahrnoval návrh a realizaci jak frontendu, tak i backendového systému pro spolehlivou komunikaci s Realpad CRM.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For the BD Olomoucká project, I developed a comprehensive website including backend architecture to showcase a residential building. I collaborated with the Realpad team to ensure seamless integration with their CRM system (Realpad API). The website allows users to browse apartments interactively, displaying up-to-date information on pricing, layouts, availability, and floor plans.",
      },
      {
        type: "p",
        content: "Key features and technologies:",
      },
      {
        type: "ul",
        items: [
          "Frontend built in React, tailored to the developer’s visual requirements",
          "Dynamic unit rendering using SVG with interactive effects (hover, tooltips, selection)",
          "Graphic template and script for generating PDF presentation cards for each apartment",
          "Backend built with Node.js and Nginx, enabling secure communication and persistent data storage",
          "Integration with Realpad API for scheduled fetching of unit details and pricing",
          "Data caching from Realpad API using MongoDB to ensure fast load times and reduce API load",
          "Lead form integration with Realpad CRM, including full logging and CAPTCHA protection (Cloudflare Turnstile)",
        ],
      },
      {
        type: "p",
        content:
          "The project included both frontend development and the design and implementation of a backend system to ensure reliable communication with Realpad CRM.",
      },
    ],
    tags: [
      "Fullstack",
      "React",
      "Node.js",
      "TailwindCSS",
      "JavaScript",
      "Nginx",
      "API",
      "CRM",
      "MongoDB",
      "Github Actions",
    ],
    year: 2025,
    link: "",
    company: "",
  },
  {
    titleCS: "GS Style Tiling – Landing page pro obkladačskou firmu",
    titleEN: "GS Style Tiling – Tiling Business Landing Page",
    image: assets.filter((i: string) => i.includes("gsstyle")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Pro GS Style Tiling jsem navrhl a vytvořil moderní a responzivní jednostránkový web (landing page) v Reactu. Cílem bylo představit obkladačské služby přehledně, vizuálně atraktivně a s důrazem na jednoduchý kontakt.",
      },
      {
        type: "p",
        content: "Hlavní prvky a technologie:",
      },
      {
        type: "ul",
        items: [
          "Frontend postavený v Reactu bez redakčního systému",
          "Moderní a čistý design s důrazem na responzivitu",
          "Sekce s nabídkou služeb, referencemi, galerií a kontaktními informacemi",
          "Statický web optimalizovaný pro rychlé načítání",
          "Jednoduchý kontaktní formulář s validací",
        ],
      },
      {
        type: "p",
        content:
          "Výsledkem je rychlá a přehledná prezentace řemeslné práce, která podpoří důvěryhodnost značky a usnadní kontakt potenciálním klientům.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "I designed and built a modern, responsive one-page website (landing page) for GS Style Tiling using React. The goal was to clearly showcase the company's tiling services in a clean and approachable format with easy contact options.",
      },
      {
        type: "p",
        content: "Key features and technologies:",
      },
      {
        type: "ul",
        items: [
          "Frontend built with React (no CMS)",
          "Modern and minimalist responsive design",
          "Sections for services, references, gallery, and contact details",
          "Static site optimized for performance",
          "Simple contact form with validation",
        ],
      },
      {
        type: "p",
        content:
          "The result is a fast, clear, and professional presentation of craftsmanship that enhances trust and encourages potential clients to get in touch.",
      },
    ],
    tags: [
      "React",
      "TailwindCSS",
      "Frontend",
      "Landing Page",
      "Responsive Design",
      "Web Design",
      "Contact Form",
      "Static Site",
    ],
    year: 2025,
    link: "https://www.gsstyle-tiling.cz/",
    company: "",
  },
  {
    titleCS: "Solismont.cz – Správa a úpravy WordPress webu",
    titleEN: "Solismont.cz – WordPress Website Content Management",
    image: assets.filter((i: string) => i.includes("solismont")),
    descriptionCS: [
      {
        type: "p",
        content:
          "U projektu Solismont.cz jsem převzal správu stávající WordPress webové prezentace. Mým úkolem bylo kontinuálně upravovat a doplňovat obsah podle potřeb klienta, vytvářet nové podstránky, přidávat příspěvky a upravovat strukturu i vzhled jednotlivých sekcí.",
      },
      {
        type: "p",
        content: "Hlavní činnosti a úpravy:",
      },
      {
        type: "ul",
        items: [
          "Přidávání a editace obsahu přes WordPress editor a Bricks builder (stránky, příspěvky, widgety)",
          "Úpravy stávajících sekcí včetně textového a obrazového obsahu",
          "Vytváření nových podstránek a jejich začlenění do navigace",
          "Nasazení nových prvků pomocí blokových editorů a případného custom HTML/CSS",
          "Základní údržba a kontrola funkčnosti webu",
        ],
      },
      {
        type: "p",
        content:
          "Projekt byl zaměřen na dlouhodobou správu obsahu s cílem udržet web aktuální, přehledný a plně funkční podle požadavků klienta.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For the Solismont.cz project, I took over management of an existing WordPress website. My responsibilities included continuous content updates, creating new subpages, publishing posts, and adjusting the layout and structure of various sections based on client needs.",
      },
      {
        type: "p",
        content: "Key responsibilities and changes:",
      },
      {
        type: "ul",
        items: [
          "Adding and editing content via the WordPress editor (pages, posts, widgets)",
          "Modifying existing sections including text and media content",
          "Creating new subpages and integrating them into the site navigation",
          "Deploying new elements using block editors or custom HTML/CSS where necessary",
          "Basic maintenance and functionality checks of the website",
        ],
      },
      {
        type: "p",
        content:
          "The project focused on long-term content management to keep the website up to date, user-friendly, and fully functional according to client requirements.",
      },
    ],
    tags: [
      "WordPress",
      "Content Management",
      "Website Maintenance",
      "Client Support",
    ],
    year: 2025,
    link: "https://www.solismont.cz",
    company: "",
  },
  {
    titleCS:
      "Lakovna Boskovice s.r.o. & Rendax s.r.o. – Landing pages s client-side blogem",
    titleEN:
      "Lakovna Boskovice s.r.o. & Rendax s.r.o. – React Landing Pages with Client-side Blog",
    image: assets.filter((i: string) => i.includes("rendax")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Pro klienty Lakovna Boskovice a Rendax s.r.o. jsem vytvořil jednoduché, moderní a responzivní webové prezentace v Reactu. Oba weby slouží jako firemní landing pages s jasným sdělením, kontaktními informacemi a sekcemi pro prezentaci služeb a referencí. Součástí řešení byl i jednoduchý client-side blog pro publikaci novinek.",
      },
      {
        type: "p",
        content: "Hlavní vlastnosti a technologie použité u obou projektů:",
      },
      {
        type: "ul",
        items: [
          "Frontend v Reactu",
          "Moderní responzivní design optimalizovaný pro mobilní zařízení",
          "Sekce pro služby, reference, galerii a kontakt",
          "Rychlé statické nasazení",
        ],
      },
      {
        type: "p",
        content:
          "Oba weby byly navrženy jako jednoduché a snadno udržovatelné prezentace, které firmám poskytují profesionální online přítomnost s možností správy obsahu bez potřeby složitých systémů.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For clients Lakovna Boskovice and Rendax s.r.o., I built modern, responsive business landing pages using React. Both sites offer a clear overview of services, references, and contact options, along with a lightweight client-side blog for publishing updates.",
      },
      {
        type: "p",
        content: "Key features and technologies used in both projects:",
      },
      {
        type: "ul",
        items: [
          "Frontend built in React",
          "Clean and responsive layout optimized for mobile devices",
          "Dedicated sections for services, references, gallery, and contact",
          "Fast static deployment",
        ],
      },
      {
        type: "p",
        content:
          "These websites were designed as lightweight and easy-to-maintain online presentations, giving the businesses a trustworthy digital presence with simple content management capabilities.",
      },
    ],
    tags: [
      "React",
      "Landing Page",
      "Client-side Blog",
      "Frontend",
      "Responsive Design",
      "Static Site",
      "Web Design",
    ],
    year: 2024,
    link: "",
    company: "",
  },
  {
    titleCS: "ProseccoVanAmore.cz – Jednoduchá prezentační stránka v Reactu",
    titleEN: "ProseccoVanAmore.cz – Simple Responsive React Landing Page",
    image: assets.filter((i: string) => i.includes("proseccovan")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Pro projekt ProseccoVanAmore.cz jsem vytvořil jednoduchý a responzivní prezentační web v Reactu. Stránka slouží jako landing page pro stylový mobilní bar s možností rezervace pro svatby, večírky a další akce. Cílem bylo vytvořit čistý, vizuálně atraktivní a funkční web, který návštěvníkům okamžitě sdělí nabídku a umožní snadný kontakt.",
      },
      {
        type: "p",
        content: "Použité technologie a klíčové prvky:",
      },
      {
        type: "ul",
        items: [
          "Frontend postavený v Reactu",
          "Plně responzivní design optimalizovaný pro mobilní zařízení",
          "Jednoduchý kontaktní formulář",
          "Přehledné rozvržení se zaměřením na vizuální styl a atmosféru",
        ],
      },
      {
        type: "p",
        content:
          "Výsledkem je svižná webová prezentace, která podporuje důvěru a okamžité spojení se zákazníky.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For the ProseccoVanAmore.cz project, I built a simple and responsive landing page in React. The website promotes a stylish mobile bar for weddings, parties, and events. The goal was to create a clean and visually engaging presentation that clearly communicates the offering and provides an easy way to get in touch.",
      },
      {
        type: "p",
        content: "Technologies used and key features:",
      },
      {
        type: "ul",
        items: [
          "Frontend developed in React with no CMS",
          "Fully responsive design optimized for mobile",
          "Simple contact form",
          "Clean layout focused on visuals and atmosphere",
        ],
      },
      {
        type: "p",
        content:
          "The result is a fast, modern web presence that builds trust and encourages immediate contact from potential clients.",
      },
    ],
    tags: [
      "React",
      "TailwindCSS",
      "Frontend",
      "Landing Page",
      "Responsive Design",
      "Contact Form",
      "Static Site",
      "Web Design",
    ],
    year: 2024,
    link: "https://www.proseccovanamore.cz/",
    company: "",
  },
  {
    titleCS: "Střechy Kopecký – Prezentační landing page v Reactu",
    titleEN: "Střechy Kopecký – Company Landing Page in React",
    image: assets.filter((i: string) => i.includes("kopecky")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Pro firmu Střechy Kopecký jsem vytvořil jednoduchý, přehledný a responzivní web v Reactu. Cílem bylo vytvořit moderní prezentační stránku zaměřenou na nabídku služeb v oblasti pokrývačských a klempířských prací. Stránka slouží jako firemní vizitka s důrazem na rychlý přehled, reference a kontaktní informace.",
      },
      {
        type: "p",
        content: "Hlavní vlastnosti a technologie:",
      },
      {
        type: "ul",
        items: [
          "Frontend v Reactu",
          "Jednoduchý a funkční design optimalizovaný pro mobilní zařízení",
          "Sekce s přehledem služeb, referencemi a kontaktem",
          "Statické nasazení pro rychlé načítání a bezproblémovou údržbu",
          "Důraz na jasné sdělení a snadnou orientaci uživatele",
        ],
      },
      {
        type: "p",
        content:
          "Výsledkem je profesionální prezentační web, který podporuje důvěryhodnost značky a efektivně předává klíčové informace zákazníkům.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For the company Střechy Kopecký, I created a simple, clear, and responsive website using React. The goal was to deliver a modern landing page presenting roofing and sheet metal services in a clean and accessible format, with an emphasis on clarity, references, and contact.",
      },
      {
        type: "p",
        content: "Key features and technologies:",
      },
      {
        type: "ul",
        items: [
          "Frontend built with React",
          "Clean and functional responsive design for mobile devices",
          "Sections for services, references, and contact",
          "Static deployment for fast loading and easy maintenance",
          "Focus on clear messaging and intuitive layout",
        ],
      },
      {
        type: "p",
        content:
          "The result is a professional landing page that supports the company’s credibility and efficiently communicates key service information.",
      },
    ],
    tags: [
      "React",
      "CSS",
      "Landing Page",
      "Responsive Design",
      "Frontend",
      "Static Site",
    ],
    year: 2024,
    link: "https://www.strechy-kopecky.cz/",
    company: "",
  },
  {
    titleCS: "SuchePodlahy‑Brno.cz – Firemní landing page v HTML/CSS/JS",
    titleEN: "SuchePodlahy‑Brno.cz – Company Landing Page in HTML/CSS/JS",
    image: assets.filter((i: string) => i.includes("suchepodlahy-brno")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Pro SuchePodlahy‑Brno.cz jsem vytvořil jednoduchou, přehlednou a responzivní landing page pomocí klasického HTML, CSS a JavaScriptu. Web slouží jako prezentační stránka pro firmu specializující se na suché podlahy Fermacell®, poskytující informace o službách, referencích a kontaktech.",
      },
      {
        type: "p",
        content: "Co stojí za zmínku:",
      },
      {
        type: "ul",
        items: [
          "Klasický stack bez frameworků – čistý HTML, modulární CSS a vanilla JS",
          "Responzivní řešení pro mobilní i desktopové zařízení",
          "Interaktivní navigace pro snadné procházení sekcí (služby, reference, kontakt)",
          "Formulář pro nezávaznou poptávku + telefonní odkaz s klikací akční ikonou",
        ],
      },
      {
        type: "p",
        content:
          "Tento projekt mi pomohl uplatnit v praxi základy tvorby webu 'od nuly' – od struktury HTML, přes design v CSS až po drobnou interaktivitu přes JavaScript.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For SuchePodlahy‑Brno.cz, I developed a simple, clear, and responsive landing page using vanilla HTML, CSS, and JavaScript. The site is a presentation page for a company specializing in Fermacell® dry floors, offering services, references, and contact information.",
      },
      {
        type: "p",
        content: "Highlights of the project:",
      },
      {
        type: "ul",
        items: [
          "Classic stack without frameworks – pure HTML, modular CSS, and vanilla JS",
          "Responsive layout for both mobile and desktop screens",
          "Interactive navigation for easy section browsing (services, references, contact)",
          "Inquiry form and clickable phone link for easy contact",
        ],
      },
      {
        type: "p",
        content:
          "This project helped me solidify web fundamentals—structural HTML, responsive CSS design, and basic JS interactivity—built completely from scratch.",
      },
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Landing Page",
      "Vanilla JS",
      "Static Site",
    ],
    year: 2023,
    link: "https://www.suchepodlahy-brno.cz/",
    company: "",
  },
  {
    titleCS: "WebJakBrno.cz – Firemní landing page v HTML/CSS/JS",
    titleEN: "WebJakBrno.cz – Company Landing Page in HTML/CSS/JS",
    image: assets.filter((i: string) => i.includes("wjb")),
    descriptionCS: [
      {
        type: "p",
        content:
          "Pro WebJakBrno.cz jsem vytvořil responzivní firemní prezentační stránku pomocí čistého HTML, CSS a JavaScriptu. Web slouží jako multi‑sekční prezentace služeb agentury (weby, sociální sítě, grafika, marketing) s jednoduchým kontaktním formulářem a sekcí referencí.",
      },
      {
        type: "p",
        content: "Klíčové vlastnosti a dovednosti z projektu:",
      },
      {
        type: "ul",
        items: [
          "Plně responzivní design přizpůsobený mobilním i desktopovým zařízením",
          "Interaktivní navigace s přechody na příslušné sekce",
          "Kontaktní formulář",
          "Optimalizace rychlosti – komprese obrázků pro rychlé načítání",
          "Základy SEO – sémantické struktury, meta tagy, viditelnost agentury",
        ],
      },
      {
        type: "p",
        content:
          "Tento projekt z počátku mé vývojové cesty ukazuje tvorbu plně funkčního jednoduše‑spravitelného webu bez použití frameworků. Web obsahuje více sekcí, responzivitu a základní interaktivitu, což podporuje profesionální image agentury.",
      },
    ],
    descriptionEN: [
      {
        type: "p",
        content:
          "For WebJakBrno.cz, I built a responsive company presentation page using pure HTML, CSS, and JavaScript. The site is a multi‑section landing page showcasing the agency's services (web, social, design, marketing) with a simple contact form and reference section.",
      },
      {
        type: "p",
        content: "Key features and skills developed:",
      },
      {
        type: "ul",
        items: [
          "Fully responsive layout for mobile and desktop",
          "Interactive navigation with smooth scroll between sections",
          "Contact form",
          "Performance optimization – image compression",
          "Basic SEO – semantic markup, meta tags",
        ],
      },
      {
        type: "p",
        content:
          "This early project demonstrates my ability to build a fully functional, easily managed site from scratch. With its multiple sections, responsive behavior, and basic interactivity, the page supports a professional agency image.",
      },
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Landing Page",
      "Static Site",
      "SEO",
    ],
    year: 2023,
    link: "https://www.webjakbrno.cz/",
    company: "",
  },
];
