import React from "react";
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { theme } from "../../theme";
const Overview = () => {
  return (
    <Col backgroundColor={theme.primaryDark}>
      <Text fontFamily="Open Sans">Overview</Text>
      <Row>
        <Col>
          <Text>WELCOME TO THE BORED APE YACHT CLUB</Text>
          <Text>
            The Heroes of Extraterrestrial Societies is a collection of 6969
            unique Elon Musk inspired NFTs- unique digital collectibles living
            on the Ethereum Blockchain. Your heroe grants access to exclusive
            members-only benefits.
          </Text>
        </Col>
      </Row>
    </Col>
  );
};
export default Overview;
