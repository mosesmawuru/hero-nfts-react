import React from "react";
import { Col } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { HeroGrid } from "../../style/Mint/style";
import { theme } from "../../theme";
import { StyledOverview } from "../../style/Mint/style";
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
          fontFamily="Montserrat"
          margin="30px 0 0"
        >
          Overview
        </Text>
        <StyledOverview>
          <Col>
            <Text fontSize="30px" fontWeight="700">
              WELCOME TO THE BORED APE YACHT CLUB
            </Text>

            <Text fontSize="20px" fontWeight="500" margin="20px 0 0 0">
              The Heroes of Extraterrestrial Societies is a collection of 6969
              unique Elon Musk inspired NFTs- unique digital collectibles living
              on the Ethereum Blockchain. Your heroe grants access to exclusive
              members-only benefits.
            </Text>
          </Col>
          <HeroGrid>
            <Image
              src={Logo1}
              width="150px"
              height="200px"
              border={`1px solid white`}
              borderRadius="10px"
            />
            <Image
              src={Logo2}
              width="150px"
              height="200px"
              border={`1px solid white`}
              borderRadius="10px"
            />
            <Image
              src={Logo3}
              width="150px"
              height="200px"
              border={`1px solid white`}
              borderRadius="10px"
            />
            <Image
              src={Logo4}
              width="150px"
              height="200px"
              border={`1px solid white`}
              borderRadius="10px"
            />
          </HeroGrid>
        </StyledOverview>
      </Col>
    </Col>
  );
};
export default Overview;
