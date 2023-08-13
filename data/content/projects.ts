import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0.1,
    title: "DDD",
    desc: "The World's Leading ROI Platform",
    img: "/static/projects/drip.png",
    link: "https://dripnetwork.io/",
    github: "code closed",
    tags: ["Solidity", "React", "HardHat"],
  },
  {
    id: 0.5,
    title: "PulseMonster",
    desc: "ULSE Monster unique token features that benefit all shared with its token holders.",
    img: "/static/projects/pmon.png",
    link: "https://pulsemonster.io/",
    github: "code closed",
    tags: ["Solidity", "React"],
  },
  {
    id: 1,
    title: "GoldenTicket",
    desc: "NFT Staking Platform for Passive Income",
    img: "/static/projects/GT.png",
    link: "https://www.thegoldenticket.money/",
    github: "code closed",
    tags: ["Solidity", "React"],
  },
  {
    id: 1.1,
    title: "SoarPls",
    desc: "The SOAR PLS dapp is a ROI for entertainment",
    img: "/static/projects/soar.png",
    link: "https://soarpulse.app/",
    github: "code closed",
    tags: ["Solidity", "React"],
  },
  {
    id: 1.2,
    title: "Zk Farmers",
    desc: "First Meta & Tourism Interaction",
    img: "/static/projects/zkb.png",
    link: "https://zkfarmers.io/",
    github: "code closed",
    tags: ["Solidity", "React"],
  },
  {
    id: 2,
    title: "Torrswap",
    desc: "A Decentralised Exchange in BTTC",
    img: "/static/projects/torrswap.png",
    link: "https://www.torrswap.io",
    github: "https://github.com/Lefgk/TorrFinance",
    tags: ["Solidity", "React", "NextJS"],
  },
  {
    id: 3,
    title: "infiniTorr",
    desc: "A Decentralised Finance ecosystem in BTTC",
    img: "/static/projects/torr.png",
    link: "https://beautiful-pony-352b46.netlify.app/auction",
    tags: ["Solidity", "React", "react-bootstrap", "NextJS"],
  },
  {
    id: 4,
    title: "The Wonka Token",
    desc: "Wonka is a DeFi Token with many use cases",
    img: "/static/projects/wonka.png",
    link: "https://thewonkatoken.com/",

    tags: ["Solidity", "React"],
  },
  {
    id: 5,
    title: "CHEDDA token",
    desc: "CHEDDA is a utility token and does not have any promise of future gains.",
    img: "/static/projects/chedda.png",
    link: "https://www.cheddatoken.com/",
    tags: ["Solidity", "React", "NextJS"],
  },
  {
    id: 6,
    title: "Shiryo NFT trading card game",
    desc: "I audited the smart contracts",
    img: "/static/projects/shiryo.png",
    link: "https://shiryo.com/",
    tags: ["Solidity", "Foundry"],
  },
  {
    id: 7,
    title: "BabyNFT ",
    desc: "BabyNFT is a community memecoin in DogeChain",
    img: "/static/projects/babynft.png",

    link: "https://babynfts.org/",

    tags: ["Solidity"],
  },
  {
    id: 8,
    title: "Magic Swap",
    desc: "I did smart contracts and integration in UI",
    img: "/static/projects/bemagicall.png",
    link: "https://bemagical.app/",
    tags: ["Solidity", "React"],
  },
  {
    id: 9,
    title: "Hadouken Inu",
    desc: "Smart Contract Audit",
    img: "/static/projects/audit.png",
    link: "https://cdn.sanity.io/files/55hv5rxq/production/a397febac964e534b05b9696420fa9b409d9240b.pdf",

    tags: ["Solidity"],
  },
  {
    id: 10,
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
