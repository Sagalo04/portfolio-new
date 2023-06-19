import { globalCss } from '@nextui-org/react';
import theme from './theme'

const globalStyles = globalCss({
    body: { margin: 0, lineHeight: "initial", fontFamily: "'Roboto', sans-serif", letterSpacing: "initial" },
    "h1,p": {
        lineHeight: "initial", fontFamily: "'Roboto', sans-serif", letterSpacing: "initial"
    },
    p: {
        fontSize: 18,
        "@media(max-width: 767px)": {
            fontSize: 16
        }
    },
    ".lighter": {
        fontWeight: "lighter"
    },
    ".tcenter": {
        textAlign: "center"
    },

    ".title": {
        backgroundColor: theme.colors.backgroundSecondary,
        fontSize: 75,
        fontWeight: 100,
        "@media(max-width: 767px)": {
            fontSize: 55
        }
    },

    ".nextui-input-block-label": {
        color: "#697177 !important",
        textAlign: "left"
    },
    ".nextui-backdrop": {
        background: "rgba(0,0,0,0.6)"
    },
    ".vertical-timeline-custom-line::before": {
        background: "#0094ff"
    },
    ".vertical-timeline-custom-line": {
        color: "black"
    },
    ".vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--work .vertical-timeline-element-icon": {
        boxShadow: " 0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
    },

    ".vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--education .vertical-timeline-element-icon": {
        boxShadow: "0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
    },

    ".vertical-timeline-element-content h3": {
        fontWeight: 600,
        margin: 0
    },
    ".vertical-timeline-element-content p": {
        fontWeight: 400,
        margin: 0,
    },

    ".vertical-timeline-element-content .o-date": {
        fontWeight: 300,
        margin: 0,
    },
    ".buttonIcon": {
        marginRight: "0.5rem",
        h: "1.5rem",
        w: "1.5rem"
    }
});

export default globalStyles