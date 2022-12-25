import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Torrswap",
    desc: "A Decentralised Exchange in BTTC",
    img: "/static/projects/torrswap.png",
    link: "https://www.torrswap.io",
    github: "https://github.com/Lefgk/TorrFinance",
    tags: ["Solidity", "React", "NextJS"],
  },
  {
    id: 1,
    title: "infiniTorr",
    desc: "A Decentralised Finance ecosystem in BTTC",
    img: "/static/projects/torr.png",
    link: "https://beautiful-pony-352b46.netlify.app/auction",
    tags: ["Solidity", "React", "react-bootstrap", "NextJS"],
  },
  {
    id: 2,
    title: "The Wonka Token",
    desc: "Wonka is a DeFi Token with many use cases",
    img: "/static/projects/wonka.png",
    link: "https://thewonkatoken.com/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["Solidity", "React"],
  },
  {
    id: 3,
    title: "CHEDDA token",
    desc: "CHEDDA is a utility token and does not have any promise of future gains.",
    img: "/static/projects/chedda.png",
    link: "https://www.cheddatoken.com/",
    tags: ["Solidity", "React", "NextJS"],
  },
  {
    id: 4,
    title: "Shiryo NFT trading card game",
    desc: "I audited the smart contracts",
    img: "/static/projects/shiryo.png",
    link: "https://shiryo.com/",
    // github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Solidity", "Foundry"],
  },
  {
    id: 5,
    title: "BabyNFT ",
    desc: "BabyNFT is a community memecoin in DogeChain",
    img: "/static/projects/babynft.png",

    link: "https://babynfts.org/",
    // github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Solidity"],
  },
  {
    id: 6,
    title: "Magic Swap",
    desc: "I did smart contracts and integration in UI",
    img: "/static/projects/bemagicall.png",
    link: "https://bemagical.app/",
    tags: ["Solidity", "React"],
  },
  {
    id: 7,
    title: "Hadouken Inu",
    desc: "Smart Contract Audit",
    img: "/static/projects/audit.png",
    link: "https://cdn.sanity.io/files/55hv5rxq/production/a397febac964e534b05b9696420fa9b409d9240b.pdf",

    tags: ["Solidity"],
  },
  {
    id: 8,
    title: "HBSC",
    desc: "Financial Defi ecosystem",
    img: "/static/projects/hbsc.png",
    link: "https://hbsc-website-test-qelxg.ondigitalocean.app/",

    tags: ["Solidity", "React"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
