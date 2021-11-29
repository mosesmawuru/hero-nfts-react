import React from "react";
import { Row, Col } from "../../components/Layout";
import { Text } from "../../components/Text";
import { theme } from "../../theme";
const Roadmap = () => {
  return (
    <Row backgroundColor={theme.primaryDark} width="100%">
      <Col>
        <Text>Roadmap</Text>
        <Text>
          1) Once all 6969 unique NFTs have been minted, we will be giving away
          the value of a tesla Model 3 in Eth to 5 random wallets. Each purchase
          is a single entry, but each wallet can only win once.
        </Text>
        <Text>
          2)We want this project to be about community. Joining the society will
          grant access to exclusive content, events, and meetups each year.
        </Text>
        <Text>
          3)Owning a Hero will grant exclusive minting access to a complimentary
          wives collection. With breeding children on the horizon.
        </Text>
        <Text>
          4)Owning HOES grants voting rights in the direction of the project. We
          want to empower our community and allow them to take action.
        </Text>
        <Text>
          5) Don’t want to spoil too much but we plan to establish various
          businesses in the metaverse, beginning in Decentraland. All profits
          from these various business will 100% be redistributed to holders of
        </Text>
      </Col>
    </Row>
  );
};
export default Roadmap;
