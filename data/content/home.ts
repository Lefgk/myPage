type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const skills: Skill[] = [
  {
    title: "Solidity",
    icon: "data:image/png;base64,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",
  },

  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
