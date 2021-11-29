import React from "react";
import { Col, Row } from "../components/Layout";
import { Text } from "../components/Text";
import { Image } from "../components/Image";
import Logo from "../assets/logo.png";
import { theme } from "../theme";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Row
      height="50px"
      backgroundColor={theme.primaryDark}
      width="100%"
      align="center"
      justify="space-between"
    >
      <Col width="auto">
        <Text>Heroes of extraterrestrial societies</Text>
        <Text>Copyright &copy; {new Date().getFullYear()}</Text>
      </Col>
      <Row>
        <Image src={Logo} width="40px" height="40px" />
      </Row>
      <Row>
        <FaTwitter color={theme.primaryLight} />
        <FaInstagram color={theme.primaryLight} />
        <FaYoutube color={theme.primaryLight} />
        <FaDiscord color={theme.primaryLight} />
        <FaTelegram color={theme.primaryLight} />
      </Row>
    </Row>
  );
};
export default Footer;
