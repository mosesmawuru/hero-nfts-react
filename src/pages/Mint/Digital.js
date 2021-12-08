import React from "react";
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { DigitalView } from "../../style/Mint/style";
import line from "../../assets/images/line.png";
import mobileImg from "../../assets/images/mobile.png";

const Digital = () => {
  return (
    <DigitalView>
      <Col align="center">
        <Image src={line} width="95%" />
        <Row maxWidth="1200px" align="flex-start" className="digital_container">
          <Image src={mobileImg} maxWidth="400px" width="100%" />
          <Col>
            <Text
              fontSize="55px"
              fontWeight="bold"
              fontFamily="Montserrat"
              margin="30px 0 0"
              className="digital_header"
              wordBreak="break-word"
              width="100%"
              align="center"
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
              and blockchain sectors over the next decade. The end goal of this
              project is to capitalize on the youth of these industries and
              reward our investors
            </Text>
            <Text
              align="center"
              margin="40px 0 0 0"
              fontSize="20px"
              padding="0 12px"
            >
              Rather than raising capital through a token, we want each NFT from
              this collection to represent a 0.014% stake in the company.
              Profits will be distributed accordingly
            </Text>
          </Col>
        </Row>
      </Col>
    </DigitalView>
  );
};
export default Digital;
