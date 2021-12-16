import React from "react";
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { DigitalView } from "../../style/Mint/style";
import mobileImg from "../../assets/images/mobile.png";

const Digital = () => {
  return (
    <DigitalView>
      <Col align="center">
        <div className="dotborder"></div>
        <Row maxWidth="1200px" align="flex-start" className="digital_container">
          <Image src={mobileImg} maxWidth="400px" width="100%" />
          <Col>
            <Text
              fontSize="55px"
              fontWeight="bold"
              margin="30px 0 0"
              className="digital_header"
              wordBreak="break-word"
              width="100%"
              align="center"
              fontFamily="horizon"
            >
              DIGITAL GOODS
            </Text>
            <Text
              margin="20px 0 0 0"
              align="center"
              fontSize="20px"
              padding="0 12px"
            >
              Our team foresees continued growth in the NFT, augmented reality,
              and blockchain sectors of the next decade. The end goal of this
              project is to capitalize on the youth of these industries and
              reward our early investors.
            </Text>
            <Text
              align="center"
              margin="40px 0 0 0"
              fontSize="20px"
              padding="0 12px"
            >
              Rather than raising capital via a tradition route, we want each
              NFT from this collection to represent a 0.007% stake in a company
              to be announced upon the minting of the collection. The company
              will focus on the production of digital goods and building
              infrastructure needed in various virtual destinations
              (Decentraland, Somnium, Upland) for users to achieve real world
              experiences. Profits from these endeavors will be distributed to
              shareholders accordingly.
            </Text>
          </Col>
        </Row>
      </Col>
    </DigitalView>
  );
};
export default Digital;
