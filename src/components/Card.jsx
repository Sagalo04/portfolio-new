import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import { Icon } from "@iconify/react";
import icons from "../constants/icons";
import { styled } from "@nextui-org/react";

const StyledCard = styled(animated.div, {
  display: "flex",
  flexDirection: "column",
  /* align-items: center, */
  justifyContent: "center",
  backgroundColor: "#E9E9E9",
  width: "21rem",
  height: "fit-content",
  padding: "0 2rem 2rem 2rem",
  borderRadius: "10px",
  color: "black",
  img: {
    marginTop: "-20%",
    width: "100%",
    borderRadius: "20px",
  },
  h2: {
    margin: 0,
    marginTop: "1rem",
    fontSize: 24,
  },
  ".cardDescription": {
    margin: 0,
    marginTop: "0.5rem",
    marginBottom: "1.5rem",
    overflowWrap: "break-word",
    fontSize: "16px !important",
  },
  ".btnn": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },

  "@media (max-width: 767px)": {
    width: "19rem",
  },
});

function Card({ imagen, title, descrip, link1, link2, dis1, dis2 }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <StyledCard
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p className="cardDescription">{descrip}</p>
      <div className="btnn">
        {/* <Button title="Demo" icon={arrow} refr={link1} dis={dis1} > */}
        <Button auto disabled={!link1 ? true : false} link={link1}>
          <Icon className="buttonIcon" icon={icons["arrow"]} /> Go Site
        </Button>
        <Button auto disabled={!link2 ? true : false}>
          <Icon className="buttonIcon" icon={icons["Github"]} link={link2} />{" "}
          Code
        </Button>
        {/* <Button title="Code" icon={icons["Github"]} refr={link2} dis={dis2} /> */}
      </div>
    </StyledCard>
  );
}

export default Card;
