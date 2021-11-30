import React from "react";
import { Col } from "../../components/Layout";
import { Text } from "../../components/Text";
import { theme } from "../../theme";
const Roadmap = () => {
  return (
    <Col backgroundColor={theme.nftitem} align="center">
      <Text
        fontSize="55px"
        fontWeight="500"
        fontFamily="Montserrat"
        margin="30px 0 0"
      >
        Roadmap
      </Text>
      <Col
        maxWidth="1300px"
        mgap="0 0 10px 0"
        margin="20px 0 50px 0"
        padding="0 30px"
        width="calc(100% - 60px)"
      >
        <Text fontSize="24px" fontWeight="500">
          1) Once all 6969 unique NFTs have been minted, we will be giving away
          the value of a tesla Model 3 in Eth to 5 random wallets. Each purchase
          is a single entry, but each wallet can only win once.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          2) We want this project to be about community. Joining the society
          will grant access to exclusive content, events, and meetups each year.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          3) Owning a Hero will grant exclusive minting access to a
          complimentary wives collection. With breeding children on the horizon.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          4) Owning HOES grants voting rights in the direction of the project.
          We want to empower our community and allow them to take action.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          5) Don’t want to spoil too much but we plan to establish various
          businesses in the metaverse, beginning in Decentraland. All profits
          from these various business will 100% be redistributed to holders of
        </Text>
      </Col>
    </Col>
  );
};
export default Roadmap;
