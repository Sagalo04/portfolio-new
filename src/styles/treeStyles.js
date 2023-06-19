import { styled } from '@nextui-org/react'
import {
    animated
} from 'react-spring'


const Frame = styled('div', {
    position: "relative",
    padding: "4px 0px 0px 0px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    // // overflow-x: hidden,
    verticalAlign: "middle",
    color: "white",
    fill: "white",
    marginBottom: "0.8rem",
    ".skillSet": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        "&::hover": {
            cursor: "pointer"
        },
        ".treeFont": {
            fontSize: "18px",
            "@media(max-width: 767px)": {
                fontSize: "16px",
            },
        }
    }
})

const Content = styled(animated.div, {
    willChange: "transform, opacity, height",
    marginLeft: "1.8rem",
    padding: "0px 0px 0px 14px",
    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
    overflow: "hidden",
})

const toggle = {
    width: '1.5em',
    height: '1.5em',
    marginLeft: 10,
    cursor: 'pointer',
    verticalAlign: 'middle'
}

const ico = {
    width: '3em',
    height: '3em',
    margin: 0,
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
    HorizontalAlign: 'end'
}

export {
    Frame,
    Content,
    toggle,
    ico
}