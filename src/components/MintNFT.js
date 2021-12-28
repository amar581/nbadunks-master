import React from "react";
import { Col, Row } from "react-bootstrap";
import { getTrackBackground, Range } from "react-range";
import Egg1 from "../assets/images/nfts/ball1.png";
import Egg2 from "../assets/images/nfts/ball2.png";

const MintNFT = () => {
  const STEP = 1;
  const MIN = 1;
  const MAX = 20;
  const [values, setValues] = React.useState([3]);
  return (
    <div className="mint-nft">
      <div className="container">
        <div className="row mb-2 eggs-row justify-content-center">
          <div className="col-12 mx-auto ">
            <div className="eggs-container position-relative d-flex justify-content-center">
              <img className="egg1" src={Egg1} alt="egg 1" />
              <img className="egg2" src={Egg2} alt="egg 2" />
            </div>
          </div>
        </div>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <form>
              <h2>
              Feeling like a <span className="dif">lucky gorilla?</span> 
              </h2>
              <p className="mb-5 mt-3">
              When you mint a DUNK NFT, you will have a chance to mint an ultra rare or super rare gorilla.
              </p>
              <div className="mint-slider-container">
                <Range
                  // className="range-slider"
                  values={values}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                      style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%"
                      }}
                    >
                      <div
                        ref={props.ref}
                        style={{
                          height: "8px",
                          width: "100%",
                          borderRadius: "4px",
                          background: getTrackBackground({
                            values,
                            colors: ["#311352", "rgba(255,255,255,.3)"],
                            min: MIN,
                            max: MAX
                          }),
                          alignSelf: "center"
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        backgroundColor: "#311352",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%"
                      }}
                    >
                      <div
                        className="range-slider-label"
                        style={{
                          position: "absolute",
                          top: "-40px",
                          color: "#311352",
                          fontWeight: "500",
                          fontSize: "16px",
                          background: "#fff",
                          padding: "4px",
                          borderRadius: "4px",
                          width: 48,
                          height: 32,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center"
                        }}
                      >
                        {values[0]}
                      </div>
                      <div
                        style={{
                          // backgroundColor: "#548BF4",
                          left: "50%",
                          background: "#9435e3",
                          borderRadius: "50%",
                          width: 8,
                          height: 8,
                          backgroundColor: isDragged ? "#311352" : "#311352"
                        }}
                      />
                    </div>
                  )}
                />
                <span>1 DUNK = 1 SOL</span>
              </div>
              {/* <p className="mt-2 mb-4">
                🦊 Connect to Metamask using the button below
              </p> */}

              <div className="mint-nft-btn d-inline-block">
                <button className="conn-metamask">Connect Wallet to Mint a Gorilla</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MintNFT;
