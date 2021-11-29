import React, { useState } from "react";
import { Row, Col } from "../components/Layout";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import Logo from "../assets/NFT/1.jpg";
import { theme } from "../theme";
import getweb3 from "../getWeb3";
const Navbar = () => {
  const [account, setAccount] = useState("");
  const onConnectWallet = async () => {
    const web3 = await getweb3();
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };
  return (
    <Col
      height="60px"
      backgroundColor={theme.primaryDark}
      align="center"
      justify="center"
      padding="5px 20px"
      width="calc(100% - 40px)"
    >
      <Row justify="space-between" width="100%" maxWidth="1300px">
        <Row>
          <Image src={Logo} width="45px" height="45px" borderRadius="100%" />
          <Text margin="0 0 0 10px" fontSize="20px">
            Heroes of extraterrestrial societies
          </Text>
        </Row>
        <Button
          variant="white"
          onClick={() => {
            onConnectWallet();
          }}
        >
          <Text
            fontFamily="Open Sans"
            color={theme.primaryDark}
            fontWeight="bold"
          >
            {account
              ? `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}`
              : "Connect Wallet"}
          </Text>
        </Button>
      </Row>
    </Col>
  );
};
export default Navbar;
