import React from "react";
import Timeline from "../components/Timeline";
import { styled } from "@nextui-org/react";
import theme from "../styles/theme";

const StyledResume = styled("section", {
  [`.${theme} &`]: {
    backgroundColor: "$backgroundSecondary",
    paddingTop: "2rem",
    paddingBottom: "4rem",
    paddingInline: "10rem",
    ".title": {
      textAlign: "center",
    },
    "@media(max-width: 767px)": {
      paddingInline: "2rem",
    },
  },
});

function Resume(props) {
  return (
    <StyledResume>
      {/* <div> */}
      <h1 className="title">Resume</h1>
      <Timeline />
      {/* </div> */}
    </StyledResume>
  );
}

export default Resume;
