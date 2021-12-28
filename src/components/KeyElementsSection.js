import React from "react";
import { Col, Row } from "react-bootstrap";

const KeyElementsSection = () => {
  return (
    <div className="key-elements-section">
      <div className="container">
        <Row className="">
          <Col lg={6}>
            <div className="key-box-o1">
              <div className="inner-box">
                <h2>Phase 1</h2>
                <p>
                  Gutter Labs is our soul-wrapper and the real-world legal
                  entity that interacts with existing companies and brands on
                  behalf of us, Gutter Cat Gang DAO. This enables us to go
                  further than the metaverse and ensure real world operations.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="d-flex flex-column">
            <h1 class="heading-keyfeature">
            OUR  <br/> <span class="text-span-6">ROADMAP</span>
            </h1>
            <div class="small-o ">
              <div className="small-o-inner">
                <h2 class="">Phase 2</h2>
                <p class="">
                  In our early stages, the contract will be more controlled and
                  easily updated. In later stages, the control over the contract
                  will be incrementally released at an increasing rate until
                  100% decentralization is reached.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="row2-o1">
              <div className="row2-o1-inner">
                <h2>Phase 3</h2>
                <p>
                  Gutter Labs is our soul-wrapper and the real-world legal
                  entity that interacts with existing companies and brands on
                  behalf of us, Gutter Cat Gang DAO. This enables us to go
                  further than the metaverse and ensure real world operations.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="row2-o2">
              <div className="row2-o2-inner">
                <div>
                  <h2 class="text-block-4">Phase 4</h2>
                  <p class="paragraph-3">
                    One of the most interesting aspects of our DAO governance is
                    its dynamic nature. Our code is always in flux and evolving
                    with the space as we adapt to new utility, new metaverse's,
                    and integrations that help avoid bad actors.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default KeyElementsSection;
