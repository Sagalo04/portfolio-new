import React from "react";
import { Button as Btn, styled } from "@nextui-org/react";
import theme from "../styles/theme";
const StyledButton = styled(Btn, {
  [`.${theme} &`]: {
    backgroundColor: "$blueBrand",
  },
  "&.nextui-button--disabled": {
    backgroundColor: "rgba(131, 202, 253, 0.4) ",
    color: "#c2c2c2",
  },
});

function Button({ link, children, ...props }) {
  return (
    <StyledButton
      onClick={link ? () => window.open(link, "_blank") : null}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
