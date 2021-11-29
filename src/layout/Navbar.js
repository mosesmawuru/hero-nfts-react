import React from "react";
import { Row, Col } from "../components/Layout";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import Logo from "../assets/NFT/1.jpg";
import { theme } from "../theme";
const Navbar = () => {
  return (
    <Col
      height="50px"
      backgroundColor={theme.primaryDark}
      align="center"
      justify="center"
      padding="5px 20px"
      width="calc(100% - 40px)"
    >
      <Row maxWidth="1300px" justify="space-between" width="100%">
        <Row>
          <Image src={Logo} width="40px" height="40px" borderRadius="100%" />
          <Text fontFamily="Open Sans" margin="0 0 0 10px" fontSize="20px">
            Heroes of extraterrestrial societies
          </Text>
        </Row>
        <Button>
          <Text
            fontFamily="Open Sans"
            color={theme.primaryDark}
            fontWeight="bold"
          >
            Connect Wallet
          </Text>
        </Button>
      </Row>
    </Col>
  );
};
export default Navbar;
