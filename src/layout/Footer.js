import React from "react";
import { Col, Row } from "../components/Layout";
import { Text } from "../components/Text";
import { theme } from "../theme";

const Footer = () => {
  return (
    <Row height="80px" backgroundColor={theme.nftitem} width="100%">
      <Row
        align="center"
        justify="center"
        padding="5px 20px"
        width="calc(100% - 40px)"
        maxWidth="1300px !important"
      >
        <Col width="auto" align="center">
          <Text>Heroes of extraterrestrial societies</Text>
          <Text>Copyright &copy; {new Date().getFullYear()}</Text>
        </Col>
      </Row>
    </Row>
  );
};
export default Footer;
