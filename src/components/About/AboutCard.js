import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="yellow">Venkatesh </span>
            from <span className="purple"> India</span>
            <br />
            I'am completed my B.sc Information Technology in Guru Nanak
            College,chennai. Now currently Working as a
            <b className="purple"> FrontEnd Developer</b> in CaddyCode Solutions
            Pvt.Ltd
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Love Cinema
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
