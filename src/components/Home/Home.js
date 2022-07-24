import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesBg from "../ParticlesBg";
import homeLogo from "../../Assets/whenkey.SVG";
import Type from "./Type";
import Home2 from "./Home2";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <ParticlesBg />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave_effect">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Venkatesh</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <Type string="FrontEnd Developer" />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 60 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </>
  );
}

export default Home;
