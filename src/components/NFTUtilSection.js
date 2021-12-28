import React from "react";
import { Col, Row } from "react-bootstrap";
import UtilImg1 from "../assets/images/nfts/9814.png";
const NFTUtilSection = () => {
  return (
    <div className="nft-util-section">
      <Row className="mx-2  align-items-center">
        <Col md={7}>
          <div className="left-side-util">
            <div class="centerHeading text-left w-100 align-items-start ">
              <h2 className="mb-3">
                Explore Utility of <span>NBA</span>
              </h2>
              <p style={{ textAlign: "left" }}>
                Utility NFTs are NFTs that carry some underlying utility or
                application. A very creative description indeed. Whether it's
                redeemable rewards or membership NFTs, a rising number of
                creators and developers are leveraging blockchain-backed tokens
                to build and support their communities.
                <br />
                <br />
                Buy and sell scarce digital goods from the likes of POAP, Urbit
                ID, and Polyient Games.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="row util-right">
            <Col xs={12}>
              <div className="img-util-container">
                <img className="img-fluid" src={UtilImg1} alt="" />
              </div>
            </Col>
            {/* <Col xs={6}>
              <div className="img-util-container">
                <img className="img-fluid" src={UtilImg1} alt="" />
              </div>
            </Col>
            <Col xs={6}>
              <div className="img-util-container">
                <img className="img-fluid" src={UtilImg1} alt="" />
              </div>
            </Col>
            <Col xs={6}>
              <div className="img-util-container">
                <img className="img-fluid" src={UtilImg1} alt="" />
              </div>
            </Col> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NFTUtilSection;
