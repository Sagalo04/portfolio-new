import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure, usePrevious } from "../functions/helper";
import { Content, Frame, ico, toggle } from "../styles/treeStyles";
import * as icons from "./icons";
import { Icon } from "@iconify/react";

function Tree({ children, name, style, open = false, iconi }) {
  const [isOpen, setOpen] = useState(open);
  const prev = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  let { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 100}px,0,0)`,
    },
  });
  const Icona =
    icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <div className="skillSet" onClick={() => setOpen(!isOpen)}>
        <div>
          <Icon style={{ ...ico }} icon={iconi} color="#0094ff" height="24" />
          <span
            style={{ verticalAlign: "middle", marging: 0, ...style }}
            className="treeFont"
          >
            {name}
          </span>
        </div>
        {<Icona style={{ ...toggle, opacity: children ? 1 : 0.3 }} />}
      </div>
      <Content
        style={{
          opacity,
          height: height.interpolate((height) =>
            isOpen && prev === isOpen ? "auto" : height
          ),
        }}
      >
        <animated.div style={{ transform }} {...bind}>
          {children}
        </animated.div>
      </Content>
    </Frame>
  );
}

export default Tree;
