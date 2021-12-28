import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import LogoAboutUs from "../assets/images/nfts/dunk1.png";
import AboutBoxIcon from "../assets/images/about-demo-box.png";
import AboutGlobIcon from "../assets/images/about-demo-glob.png";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="container">
        <h2 className="heading-keyfeature mw-100 pb-4 pb-lg-0">
        WHAT IS NBA <span> DUNKS</span>?
        </h2>
        <Row className="align-items-center justify-contnet-center flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <Image src={LogoAboutUs} fluid />
            {/* <img  src={LogoAboutUs} alt="" /> */}
          </Col>
          <Col lg={6}>
            <div className="icon-about-g">
              <div className="icon-about-inner">
                <img src={AboutBoxIcon} alt="" />
              </div>
              <img className="glob-inner" src={AboutGlobIcon} alt="" />
            </div>
            <h3 className="icon-bottom-heading">
            The first ever passive income generating NFTs on
Solana
            </h3>
            <p className="para-text">
              They allow for a decentralized, fair system of decision-making
              without any hierarchy or centralized power that control all
              aspects of an organization's operation from top to bottom.
            </p>
            <div className=" d-flex ">
              <span className="space-line"></span>
              <p className="para-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                veritatis quae autem quo, repudiandae unde consectetur ab
                possimus explicabo esse dolores at. Iusto ab at officiis
                pariatur debitis.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
