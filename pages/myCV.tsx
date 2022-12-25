import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function myCV() {
  return (
    <Page
      currentPage="myCV"
      meta={{
        desc: "I'm an  self-taught designer ",
      }}
    >
      <Heading />
      <Projects />
      {/*    <More /> */}
    </Page>
  );
}

export default myCV;
