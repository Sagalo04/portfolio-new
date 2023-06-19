import React from "react";
import { Icon } from "@iconify/react";
import icons from "../constants/icons";
import { iconImg } from "../constants/images";
import { styled } from "@nextui-org/react";

const StyledSocialMedia = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  alignSelf: "start",
  position: "absolute",
  top: "20px",
  ".socialIcon": {
    width: "3.5rem",
    height: "3.5rem",
    margin: "0 -1.4rem",
  },
  a: {
    img: {
      width: "2.5rem",
    },
  },
  "@media (max-width: 767px)": {
    position: "relative",
    top: 0,
    alignSelf: "center",
  },
});

function SocialMedia(props) {
  return (
    <StyledSocialMedia>
      <Icon
        className="socialIcon"
        icon={icons.BracketOpenIcon}
        color="#ababab"
      />
      <Icon className="socialIcon" icon={icons.SlashIcon} color="#ababab" />
      <a href="https://github.com/Sagalo04" target="_blank" rel="noreferrer">
        <img src={iconImg["githubicon"]} alt="github logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/santiago-garcía-lópez-bb971022a/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconImg["linkedinicon"]} alt="linkedin logo" />
      </a>
      <a
        href="mailto:santiago_garcia09@live.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconImg["gmailicon"]} alt="gmail logo" />
      </a>
      <a
        href="https://www.instagram.com/santigl09/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconImg["instagramicon"]} alt="instagram logo" />
      </a>
      <Icon
        className="socialIcon"
        icon={icons.BracketCloseIcon}
        color="#ababab"
      />
    </StyledSocialMedia>
  );
}

export default SocialMedia;
