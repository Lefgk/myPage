import React from "react";
import projects from "@/data/content/projects";

function Designs2() {
  return (
    <>
      {" "}
      <div
        className="py-6 sm:py-10 w-full text-center relative"
        style={{ paddingBottom: "10px", paddingTop: "120px" }}
      >
        <h1
          className="text-2xl sm:text-6xl inline-block w-auto mb-2 relative"
          style={{ color: "white", fontSize: "50px" }}
        >
          I am currently looking for a job as a
        </h1>{" "}
        <h1
          className="text-2xl sm:text-6xl inline-block w-auto mb-2 relative"
          style={{ color: "orange", fontSize: "50px" }}
        >
          mid-level Blockchain/Solidity Engineer
        </h1>
      </div>
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
            I am a {makeblue("self-taught")}, extremely driven, blockchain
            developer with background in Mechanical/Aerospace Eng. For more than
            2 years I have been working with smart contracts, either{" "}
            {makeblue("creating dapps")} or {makeblue("finding bugs")}.
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
                (Uniswap/Compound/Aave..), {makeblue("gas saving techniques")}{" "}
                and security best practices.
                <br />
              </div>
              <div style={{ color: "white", lineHeight: "30px" }}>
                - I have a big experience with on and off-chain bots, arbitrage
                (all kinds) and also general task bots.
                <br />
              </div>
              <div style={{ color: "white", lineHeight: "30px" }}>
                - Big fan of {makeblue("Bankless")} podcast.
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
              </div>
              <div style={{ color: "grey" }}> STACK</div>- I consider myself
              mid-level in {makeblue("Typescript")},{" "}
              {makeblue("web3.js/ethers.js libraries")}, {makeblue("Solidity")},{" "}
              {makeblue("React")}, Next.js, Hardhat/Foundry. I am also
              profficient with front-end languages such as Typescript, React.
            </div>{" "}
            <br />
            <div
              className="py-16 sm:py-20 w-full text-center relative"
              style={{ paddingBottom: "10px", paddingTop: "20px" }}
            >
              <h1
                className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative"
                style={{ color: "white", marginBottom: "10px" }}
              >
                What can i do for you?
              </h1>
              <br />
              <h1
                className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              ></h1>
              <div
                style={{
                  color: "white",
                  lineHeight: "30px",
                  alignItems: "left",
                }}
              >
                - Design and implement scalable, secure, and reliable Smart
                Contracts.
                <br />- Create documentation and tests for smart contracts.{" "}
                <br />
                - Generally work on code reviews, testing, bug fixing,
                gas-efficient techniques <br />
                - Front-End integration of smart contracts using
                Typescript/React/next.js
                <br />
                <br />
              </div>
            </div>
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
