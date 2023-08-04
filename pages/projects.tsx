import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like Remix, Hardhat, React, Node.js, and many more! Here are some of my favorite projects.",
      }}
    >
      <Heading />
      <Projects />
      {/*More /> */}
    </Page>
  );
}

export default projects;
