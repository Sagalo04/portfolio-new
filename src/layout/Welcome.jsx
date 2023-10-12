import React from "react";
import SocialMedia from "../components/SocialMedia";
import { styled } from "@nextui-org/react";
import theme from "../styles/theme";
import Button from "../components/Button";
import { Icon } from "@iconify/react";
import icons from "../constants/icons";
import ModalContact from "../components/ModalContact";

const StyledWelcome = styled("section", {
  [`.${theme} &`]: {
    backgroundColor: "$backgroundSecondary",
    paddingInline: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    minHeight: "100vh",
    ".welcomeContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      img: {
        maxW: "456px",
        w: "45%",
      },
      ".welcomeInfo": {
        display: "flex",
        flexDirection: "column",
        fontWeight: "lighter",
        maxW: "65ch",
        gap: "1rem",
        ".tcenter": {
          "@media (min-width: 768px)": {
            textAlign: "left",
          },
        },
        h1: {
          lineHeight: "35px",
          fontWeight: 400,
          fontSize: "36px",
          margin: 0,
          span: {
            display: "block",
            color: "$blueName",
            fontWeight: "500",
          },
          "@media (max-width: 767px)": {
            fontSize: 32,
          },
        },
      },
      "@media (max-width: 767px)": {
        flexDirection: "column",
        img: {
          w: "66%",
        },
      },
    },
    ".welcolmeButtons": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "3rem",
    },
    "@media (max-width: 767px)": {
      gap: "2rem",
      padding: "2rem 0 4rem 0",
      paddingInline: "3rem",
      h1: {
        textAlign: "center",
      },
      p: {
        textAlign: "justify",
      },
    },
  },
});

function Welcome(props) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <StyledWelcome>
        <SocialMedia />
        <div className="welcomeContainer">
          <img src="/assets/images/banners/s.png" alt="" />
          <div className="welcomeInfo">
            <h1>
              Hey, I am
              <span>Santiago García</span>
            </h1>
            <p className="tcenter">Multimedia Engineer / Fullstack Developer</p>
            <p className="lighter">
              Hi! I'm Santiago García, a creative person, with initiative and I
              like to work in a team. As a Web Developer I have dedicated myself
              to creating products with the ability to offer multi-platform
              interactive experiences.
              <br />
              <br />
              Since I discovered programming, I always try to ensure that my
              developments are fully adapted to the needs of users, becoming
              dynamic systems for everyone.
            </p>
            <div className="welcolmeButtons">
              <Button auto css={{ w: "50%" }} onPress={handler}>
                Contact Me
              </Button>
              <Button
                auto
                css={{ w: "50%" }}
                link={"/assets/pdf/CV - Santi.pdf"}
              >
                <Icon className="buttonIcon" icon={icons["DownloadIcon"]} />{" "}
                Resume
              </Button>
            </div>
          </div>
        </div>
      </StyledWelcome>
      <ModalContact visible={visible} closeHandler={closeHandler} />
    </>
  );
}

export default Welcome;
