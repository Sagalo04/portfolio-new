import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";

function Timeline(props) {
  return (
    <VerticalTimeline
      style={{ width: "65%" }}
      className="vertical-timeline-custom-line"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Degree in Systems Technician
        </h3>
        <p>Colegio Leon de Greiff</p>
        <p className="o-date">July 2016</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Webpage Developer</h3>
        <p>Universidad Autónoma de Occidente</p>
        <p className="o-date">July 2019 - November 2020</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">FrontEnd Developer</h3>
        <p>Alianza 99 SAS</p>
        <p className="o-date">June 2020 - August 2020</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Unity Developer</h3>
        <p>Corporacion Talentum</p>
        <p className="o-date">October 2021 - December 2021</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Developer</h3>
        <p>Anzick Media</p>
        <p className="o-date">May 2021 - February 2022</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Development Analyst</h3>
        <p>Grupo Konecta</p>
        <p className="o-date">February 2022 - August 2022</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Multimedia Engineer</h3>
        <p>Universidad Autónoma de Occidente</p>
        <p className="o-date">October 2022</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
        <p>Project Mytology, Spain</p>
        <p className="o-date">March 2022 - July 2022</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          FullStack Developer, Backend Lead
        </h3>
        <p>Dentsu Aegis Network</p>
        <p className="o-date">August 2022 - May 2023</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Senior IT Lead</h3>
        <p>LinaMar, Australia</p>
        <p className="o-date">May 2023 - Present</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}

export default Timeline;
