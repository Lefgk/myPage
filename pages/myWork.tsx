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
      <div
        className="py-16 sm:py-20 w-full text-center relative"
        style={{ paddingBottom: "10px" }}
      >
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
          About me
        </h1>
      </div>
      <Projects />
      {/*    <More /> */}
    </Page>
  );
}

export default myWork;
