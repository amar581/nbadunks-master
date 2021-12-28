import React from "react";
import { Row, Col } from "react-bootstrap";
import YahooNewsLogo from "../assets/images/yahoo-news-logo.png";
import YahooFinanceLogo from "../assets/images/YahooFinanceLogo.png";

import MarketWatchLogo from "../assets/images/marketwatch-logo.png";

// import { ReactComponent as YahooFinanceLogo } from "../assets/images/yahoo-finance-logo.svg";
// import { ReactComponent as MarketWatchLogo } from "../assets/images/marketwatch-logo.svg";

const FeaturedOn = () => {
  return (
    <div className="featured-on">
      <Row className="px-0 px-md-5 ">
        <Col lg={4}>
          <div className="centerHeading align-items-start w-100">
            <h2>
              Featured <span>on</span>
            </h2>
          </div>
        </Col>
        <Col lg={8}>
          <p>
            At campfire we are excited about a brand new type of digital good
            called a non-fungible token, or NFT.{" "}
          </p>
          <div className="logos-featured">
            <div>
              <img className="mw-100" src={YahooNewsLogo} alt="" />
            </div>
            <div>
              <img src={YahooFinanceLogo} alt="" />
            </div>
            <div>
              <img src={MarketWatchLogo} alt="" />
              {/* <MarketWatchLogo /> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedOn;
