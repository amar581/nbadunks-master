import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FaqSection = () => {
  return (
    <div className="faq">
      <Container>
        <div className="faq-header pb-5">
          <span>FAQ</span>
          <h1 className="mt-1">
            get the
            <span> facts</span>
          </h1>
        </div>
        <Accordion className="">
          <div className="split-acc"></div>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
            Are you affiliated with the official NBA (National Basketball Association)?
              <span className="acc-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </span>
            </Accordion.Header>
            <Accordion.Body>
            No, we are not affiliated with the NBA. NBA Dunk is a fan-made project that
celebrates the excitement and athleticism of slam dunks. However, we have
many official partnerships with various NBA players and teams.
            </Accordion.Body>
          </Accordion.Item>
          <div className="split-acc"></div>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
            Why does NBA Dunks exist?
              <span className="acc-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </span>
            </Accordion.Header>
            <Accordion.Body>
            <ol>
            <li> Gorillas are cool.</li>
            <li> We wanted to build something fun and unique that tapped into the heart of
the Solana NFT community.</li>
<li> We believe NFTs should represent more than a JPEG in your wallet. This is
a cultural revolution. We have built the first ever passive income generating
NFTs on solana.</li>
</ol>
            </Accordion.Body>
          </Accordion.Item>
          <div className="split-acc"></div>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            Will there be multiple generations of this NFT collection?
              <span className="acc-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Yes!
            </Accordion.Body>
          </Accordion.Item>
          <div className="split-acc"></div>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
            How do I earn passive income rewards with my NFTs?
              <span className="acc-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </span>
            </Accordion.Header>
            <Accordion.Body>
            We will be releasing an NFT staking and farming platform that will unlock the
utility of DUNK NFTs and supercharge holders' earning potential. Stay tuned
for more updates!
            </Accordion.Body>
          </Accordion.Item>
          <div className="split-acc"></div>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
            Where can I sell my NFT?
              <span className="acc-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </span>
            </Accordion.Header>
            <Accordion.Body>
            After minting your NFT, it will be stored in your wallet. You can then list it on
NBA Dunk's official marketplace, <a href="https://solsea.io/" target="_blank">solsea.io
  </a>
            </Accordion.Body>
          </Accordion.Item>
          <div className="split-acc"></div>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
            How can I contact the NBA Dunk team?
              <span className="acc-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </span>
            </Accordion.Header>
            <Accordion.Body>
            We are all super active on Discord and Telegram!
            </Accordion.Body>
          </Accordion.Item>
          <div className="split-acc"></div>
        </Accordion>
      </Container>
    </div>
  );
};

export default FaqSection;
