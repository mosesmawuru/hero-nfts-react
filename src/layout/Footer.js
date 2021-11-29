import React from "react";
import { Col } from "../components/Layout";
import { Text } from "../components/Text";
import { theme } from "../theme";
const Footer = () => {
  return (
    <Col height="50px" backgroundColor={theme.primaryDark}>
      <Text>Footer</Text>
    </Col>
  );
};
export default Footer;
