import React from "react";
import projects from "@/data/content/projects";

function Designs2() {
  return (
    <>
      <div
        className="py-16 sm:py-20 w-full text-center relative"
        style={{ paddingBottom: "10px" }}
      >
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
          About me
        </h1>
      </div>
      <div style={{ color: "grey", textAlign: "justify" }}>
        <section
          className="content-section"
          style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "left" }}
        >
          <div style={{ color: "white", lineHeight: "30px" }}>
            I am a {makeblue("self-taught")} blockchain developer with
            background in Mechanical/Aerospace Eng. For more than 2 years I have
            been working with smart contracts, either{" "}
            {makeblue("creating dapps")} or {makeblue("finding bugs")}. Most of
            the DAPPS i have created <del>have rugpulled</del> have finished so
            they are not shown in my Projects.
            <br />
          </div>

          <div style={{ marginBottom: "2em" }}>
            {" "}
            <br />
            <div style={{ color: "white", lineHeight: "30px" }}>
              - I am active in several bug bounty communities like{" "}
              {makeblue("Sherlock")}, {makeblue("code4arena")} and I have
              produced 3 audits for{" "}
              <a
                href="https://www.veracitysecurity.com/"
                target="_blank"
                className="hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"
              >
                Veracity{" "}
              </a>
              ({" "}
              <a
                href="https://cdn.sanity.io/files/55hv5rxq/production/a397febac964e534b05b9696420fa9b409d9240b.pd"
                target="_blank"
                className="hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"
              >
                {" "}
                example
              </a>
              ). I also spend a lot of time in blockchain explorers looking for
              random security flaws.
              <br />
            </div>
            <div style={{ color: "white", lineHeight: "30px" }}>
              - I have created several DAPPS by forking popular smart contracts
              and adjusting them to clients' instructions, see{" "}
              <a href="/projects"> {makeblue("Projects")}</a>.
              <div style={{ color: "white", lineHeight: "30px" }}>
                - I have a good understanding of {makeblue("Solidity")}, the{" "}
                {makeblue("EVM")}, most used opcodes, testing suites like
                Hardhat/{makeblue("Foundry")}, top DeFi protocols
                (Uniswap/Compound/Aave..), gas saving techniques.
                <br />
              </div>
              <div style={{ color: "white", lineHeight: "30px" }}>
                - I have made over $100,00k with arbitrage bots
                <br />
              </div>
              <div style={{ color: "white", lineHeight: "30px" }}>
                - One of my current personnal project is building a tool where u
                can browse and decompile smart contracts in order to be able to
                automatically flag anomalies. Similar to{" "}
                <a href="https://dedaub.com/" target="blank">
                  Debaub
                </a>{" "}
                but with support for unsupported chains.
                <br />
                <br />
              </div>
              <div style={{ color: "grey" }}> STACK</div>- I consider myself
              mid-level in {makeblue("Typescript")}, {makeblue("Node.js")},{" "}
              {makeblue("Solidity")}, {makeblue("React")}, Next.js,
              Hardhat/Foundry
            </div>{" "}
          </div>
        </section>
      </div>
    </>
  );
}

const Experiences = [
  `I like web3 security, I am involved in various bug bounty communities (code4rena, Sherlock)`,
  `- infiniTorr : Smart Contracts and Integration`,
  `- Wonka : Smart Contracts and Integration`,
  `- CHEDDA : Smart Contracts and Integration`,
  `- Shiryo : Smart Contracts and Integration`,
  `- Babynft : Smart Contracts and Integration`,
  `- Magic : Smart Contracts and Integration`,
];
const makeblue = (text) => {
  return <span className="heroShiny1 text-fun-pink">{text}</span>;
};
export default Designs2;
