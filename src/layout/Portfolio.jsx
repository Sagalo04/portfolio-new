import React from "react";
import Caroussel from "../components/Carousel";
import { cards } from "../components/cards";
import { styled } from "@nextui-org/react";
import theme from "../styles/theme";

const StyledPortfolio = styled("section", {
  [`.${theme} &`]: {
    backgroundColor: "$backgroundPrimary",
    paddingTop: "5rem",
    paddingBottom: "1rem",
    position: "relative",
    "@media(max-width: 767px)": {
      display: "flex",
      paddingTop: "4rem",
      paddingInline: "2rem",
      justifyContent: "center",
    },
    ".title": {
      position: "absolute",
      borderRadius: 11,
      paddingInline: "1rem",
      top: -50,
      transform: "translateX(75px)",
      "@media(max-width: 767px)": {
        top: -35,
        transform: "none",
      },
    },
  },
});

function Portfolio(props) {
  return (
    <StyledPortfolio>
      <h1 className="title">Portfolio</h1>
      <Caroussel
        cards={cards}
        height="500px"
        width="50%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </StyledPortfolio>
  );
}

export default Portfolio;
