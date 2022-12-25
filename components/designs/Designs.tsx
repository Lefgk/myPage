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
                Phone: +44 7706253730
                <br />
                ENS: lefgiak.eth
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
              {Experiences.map((item) =>
                Experiences2(item, Experiences.indexOf(item))
              )}
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
  `- Self Learning (Solidity/React/Typescript/Node.js), 2020`,
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

const Experiences2 = (text, text2) => {
  return (
    <a
      href={projects[text2].link}
      target="_blank"
      className="hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"
    >
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
        {projects[text2].title}
        <br />
      </h3>
    </a>
  );
};
export default Designs;
