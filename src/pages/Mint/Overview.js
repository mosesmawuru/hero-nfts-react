import React from "react";
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { HeroGrid } from "../../style/Mint/style";
import { theme } from "../../theme";
import Logo1 from "../../assets/NFT/1.jpg";
import Logo2 from "../../assets/NFT/2.jpg";
import Logo3 from "../../assets/NFT/3.jpg";
import Logo4 from "../../assets/NFT/4.jpg";
const Overview = () => {
  return (
    <Col backgroundColor={theme.primaryDark} align="center">
      <Col align="center" maxWidth="1300px" margin="0 0 40px 0">
        <Text
          fontSize="55px"
          fontWeight="500"
          fontFamily="Aladin"
          margin="30px 0 0"
        >
          Overview
        </Text>
        <Row margin="20px 0 0 0" padding="0 40px" align="flex-start">
          <Col margin="0 30px 0 0">
            <Text fontSize="35px" fontWeight="700">
              WELCOME TO THE BORED APE YACHT CLUB
            </Text>

            <Text fontSize="20px" fontWeight="500" margin="10px 0 0 0">
              The Heroes of Extraterrestrial Societies is a collection of 6969
              unique Elon Musk inspired NFTs- unique digital collectibles living
              on the Ethereum Blockchain. Your heroe grants access to exclusive
              members-only benefits.
            </Text>
          </Col>
          <HeroGrid>
            <Image src={Logo1} width="180px" height="200px" />
            <Image src={Logo2} width="180px" height="200px" />
            <Image src={Logo3} width="180px" height="200px" />
            <Image src={Logo4} width="180px" height="200px" />
          </HeroGrid>
        </Row>
      </Col>
    </Col>
  );
};
export default Overview;
