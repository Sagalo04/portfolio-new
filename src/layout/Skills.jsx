import { styled } from "@nextui-org/react";
import theme from "../styles/theme";
import Tree from "../components/Tree";
import icons from "../constants/icons";

const StyledSkills = styled("section", {
  [`.${theme} &`]: {
    backgroundColor: "$backgroundPrimary",
    position: "relative",
    paddingTop: "4rem",
    paddingInline: "3rem",
    "@media(max-width: 767px)": {
      display: "flex",
      paddingTop: "3rem",
      paddingInline: "2rem",
      justifyContent: "center",
    },
    img: {
      maxW: "380px",
      w: "30%",
      alignSelf: "start",
      "@media(max-width: 767px)": {
        alignSelf: "center",
        w: "55%",
      },
    },
    ".skillsContainer": {
      display: "flex",
      justifyContent: "center",
      gap: "4rem",
      "@media(max-width: 767px)": {
        flexDirection: "column-reverse",
        gap: "0rem",
        alignItems: "center",
      },
    },
    ".title": {
      position: "absolute",
      borderRadius: 11,
      paddingInline: "1rem",
      top: -50,
      transform: "translateX(30px)",
      "@media(max-width: 767px)": {
        top: -35,
        transform: "none",
      },
    },
  },
});

function Skills(props) {
  return (
    <StyledSkills>
      <h1 className="title">Skills</h1>
      <div className="skillsContainer">
        <div>
          <Tree name="Programming Languages" iconi={icons.ConsoleIcon}>
            <Tree name="Python" />
            <Tree name="Java" />
            <Tree name="Javascript" />
            <Tree name="C#" />
            <Tree name="Php" />
            <Tree name="TypeScript" />
            <Tree name="Matlab" />
            <Tree name="C++"></Tree>
            <Tree name="SQL" />
            <Tree name="Dart" />
          </Tree>
          <Tree name="Web Development" iconi={icons.BracketsIcon}>
            <Tree name="HTML 5" />
            <Tree name="CSS" />
            <Tree name="SASS" />
            <Tree name="LESS" />
            <Tree name="Node.Js" />
            <Tree name="Deno" />
            <Tree name="Api Rest" />
            <Tree name="AWS" />
            <Tree name="Github" />
          </Tree>
          <Tree name="Frameworks / Libraries" iconi={icons.FrameworkIcon}>
            <Tree name="React" />
            <Tree name="Vue" />
            <Tree name="Next.Js" />
            <Tree name=".Net" />
            <Tree name="Express" />
            <Tree name="Flask" />
            <Tree name="Keras" />
            <Tree name="TensorFlow" />
            <Tree name="Arduino" />
          </Tree>
          <Tree name="Game Development" iconi={icons.GameIcon}>
            <Tree name="Unity" />
            <Tree name="Unreal Engine" />
          </Tree>
          <Tree name="Databases" iconi={icons.DatabaseIcon}>
            <Tree name="Relationals" />
            <Tree name="No Relationals" />
            <Tree name="MySQL" />
            <Tree name="MongoDB" />
            <Tree name="MariaDB" />
            <Tree name="PostgreSQL" />
            <Tree name="SQLite" />
            <Tree name="Firebase" />
          </Tree>
          <Tree name="Web Design" iconi={icons.DesignIcon}>
            <Tree name="Adobe XD" />
            <Tree name="Figma" />
          </Tree>
        </div>
        <img src="/assets/images/banners/s2.png" alt="" />
      </div>
    </StyledSkills>
  );
}

export default Skills;
