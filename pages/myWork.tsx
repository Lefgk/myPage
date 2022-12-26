import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs2";
import React from "react";

function myWork() {
  return (
    <Page
      currentPage="myWork"
      meta={{
        desc: "I'm an  self-taught designer ",
      }}
    >
      <Projects />
      {/*    <More /> */}
    </Page>
  );
}

export default myWork;
