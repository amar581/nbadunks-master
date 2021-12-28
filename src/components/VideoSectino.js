import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as ArrowRight } from "../assets/images/arrow-right.svg";
import Video from "../assets/video/12.mp4";
const VideoSectino = () => {
  return (
    <div className="video-section">
      <Row>
        <Col md={6}>
          <div className="video-background">
            <video autoPlay={true} loop={true} muted>
              <source src={Video} />
              {/* <source src="https://assets-global.website-files.com/60ee7f0f5b5bdd49e16a0b15/60eec470c8147406b3d69c1e_GCG_video-transcode.webm" /> */}
            </video>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="video-right-text">
            <div>
              <div className="sub-h">Community</div>
              <h3>
             BECOME PART OF THE <span>JUNGLE</span>{" "}
               
              </h3>
              <a className="btn-register-today" href="#link">
              Join The Community <ArrowRight />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VideoSectino;
