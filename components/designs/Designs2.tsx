import React from "react";
import projects from "@/data/content/projects";

function Designs2() {
  return (
    <>
      <div style={{ color: "grey" }}>
        <section
          className="content-section"
          style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "left" }}
        >
          <div style={{ color: "white", lineHeight: "30px" }}>
            I am a {makeblue("self-taught")} blockchain developer with
            background in Mechanical/Aerospace Eng. <br /> For more than 2 years
            I have been working with smart contracts, either{" "}
            {makeblue("creating dapps")} or {makeblue("finding bugs")}. <br />{" "}
            Most of the DAPPS i have created <del>have rugpulled</del> have
            ceased to exist so they are not shown in my Projects.
          </div>
          <div style={{ marginBottom: "2em" }}>
            {" "}
            <br />
            <div style={{ color: "grey" }}> Smart Contracts</div>
            <div style={{ color: "white", lineHeight: "30px" }}>
              I am active in several bug bounty communities like{" "}
              {makeblue("Sherlock")}, {makeblue("code4arena")} and I have
              produced 3 audits for{" "}
              <a
                href="https://www.veracitysecurity.com/"
                target="_blank"
                className="hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"
              >
                Veracity{" "}
              </a>
              <br />
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
