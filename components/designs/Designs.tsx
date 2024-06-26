import React from "react";
import projects from "@/data/content/projects";

function Designs() {
  return (
    <>
      <div style={{ color: "grey" }}>
        <table width="100%">
          <tbody>
            <tr>
              <td align="left" width="80%">
                <h2>
                  Eleftherios Giakoumakis (also Lef or Ελευθέριος Γιακουμάκης)
                </h2>
                Self-taught blockchain developer
                <br />
                Mailing address : lefgiak@gmail.com
                <br />
                Phone: ask me
                {/* <br />
                ENS: lefgiak.eth */}
                <br />
              </td>

              <td>
                <img alt={"/"} src="static/lef.jpg" />
              </td>
            </tr>
          </tbody>
        </table>
        <section
          className="content-section"
          style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "left" }}
        >
          <div style={{ marginBottom: "2em" }}>
            <header
              style={{
                borderBottom: "4px solid #c7c7c7",
                borderTop: "2px solid #c7c7c7",
                padding: "0.2rem 0 0 0.4rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "1.75rem",
                  color: "orange",
                  margin: "0",
                }}
              >
                Experience
              </h2>
            </header>
            <div style={{ marginBottom: "2rem", display: "block" }}>
              <div className="hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                <h3
                  key="0"
                  style={{
                    fontWeight: "700",
                    margin: "0 0 0.75rem",
                    marginBottom: "10px",
                    fontSize: "1.5rem",
                    letterSpacing: "-.05rem",
                    lineHeight: "1",
                  }}
                >
                  Blockchain freelancer (2019 - Present)
                  <br />
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  I am a contracts dev. I mainly write smart contracts from
                  scratch or modify existing popular ones and integrate them
                  with React. I also write documentation and create all kinds of
                  tests with Foundry and Hardhat like forking and fuzzing. In
                  total I would say I have worked with more than 15 different
                  teams.
                </div>
              </div>
              <br />
              <div className="hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                <h3
                  key="0"
                  style={{
                    fontWeight: "700",
                    margin: "0 0 0.75rem",
                    marginBottom: "10px",
                    fontSize: "1.5rem",
                    letterSpacing: "-.05rem",
                    lineHeight: "1",
                  }}
                >
                  Security auditor (2021 - Present)
                  <br />
                </h3>
                I am really interested in smart contracts security, so I have
                been providing auditing services to a few clients like
                https://www.veracitysecurity.com/. I’m also involved in smart
                contract security and bug hunting communities ( Code4rena,
                sherlock.xyz, Immunefi )
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "2em" }}>
            <header
              style={{
                borderBottom: "4px solid #c7c7c7",
                borderTop: "2px solid #c7c7c7",
                padding: "0.2rem 0 0 0.4rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "1.75rem",
                  color: "orange",
                  margin: "0",
                }}
              >
                Education
              </h2>
            </header>
            <div style={{ marginBottom: "2rem", display: "block" }}>
              {Eduactions.map((item) => Education(item))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const Eduactions = [
  `- Uniswap hooks bootcamp - https://atrium.academy/uniswap , 2024`,
  `- Chainlink Bootcamp , 2024`,
  `- Self learning BlockChain developer (Solidity/React/Typescript/Node.js), 2020`,
  `- Blockchain Developer, National Kapodistrian Uni of Athens (99/100), 2020`,
  `- MSc, Introduction to Digital Currencies (91/100), Uni of Nicosia, 2018`,
  `- MSc, Aerospace Engineering, Cranfield Uni, 2013 and 2015`,
  `- BSc, Mechanical Engineering, Aristotle University of Thessaloniki
(AUTH), 2011`,
];
const Experiences = [
  `- TorrSwap : Smart Contracts and Integration`,
  `- infiniTorr : Smart Contracts and Integration`,
  `- Wonka : Smart Contracts and Integration`,
  `- CHEDDA : Smart Contracts and Integration`,
  `- Shiryo : Smart Contracts and Integration`,
  `- Babynft : Smart Contracts and Integration`,
  `- Magic : Smart Contracts and Integration`,
];
const Experienceslinks = [
  `https://www.torrswap.io`,
  `- infiniTorr : Smart Contracts and Integration`,
  `- Wonka : Smart Contracts and Integration`,
  `- CHEDDA : Smart Contracts and Integration`,
  `- Shiryo : Smart Contracts and Integration`,
  `- Babynft : Smart Contracts and Integration`,
  `- Magic : Smart Contracts and Integration`,
];
const Education = (text) => {
  return (
    <h3
      key={text}
      style={{
        fontWeight: "700",
        margin: "0 0 0.75rem",
        marginBottom: "10px",
        fontSize: "1.5rem",
        letterSpacing: "-.05rem",
        lineHeight: "1",
      }}
    >
      {text}
      <br />
    </h3>
  );
};

export default Designs;
