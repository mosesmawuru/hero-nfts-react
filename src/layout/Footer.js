import React from "react";
import { Col, Row } from "../components/Layout";
import { Text } from "../components/Text";
import { theme } from "../theme";

const Footer = () => {
  return (
    <Row backgroundColor={theme.nftitem} width="100%" padding="5px 0">
      <Row
        align="center"
        justify="center"
        padding="5px 20px"
        width="calc(100% - 40px)"
        maxWidth="1300px !important"
      >
        <Col width="auto" align="center">
          <Text align="center">Heroes of Extraterrestrial Societies LLC</Text>
          <Text align="center" fontSize="12px" margin="5px 0 0 0">
            Heroes of Extraterrestrial Societies LLC cannot be held liable for
            failure to deliver on objectives outlined through our official
            mediums. Please invest at your own risk and do your own research.
          </Text>
          <Text margin="5px 0 0 0">
            Copyright &copy; {new Date().getFullYear()}
          </Text>
        </Col>
      </Row>
    </Row>
  );
};
export default Footer;
