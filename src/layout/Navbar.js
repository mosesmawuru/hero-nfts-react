import React, { useContext } from "react";
import { Row, Col } from "../components/Layout";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import Logo from "../assets/NFT/1.jpg";
import { theme } from "../theme";
import getWeb3 from "../getWeb3";
import Web3 from "../context/web3";
import { getAccount } from "../wallet/getAccount";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
const Navbar = () => {
  // const account = getAccount();
  const { setWeb3 } = useContext(Web3);
  const onConnectWallet = async () => {
    const web3 = await getWeb3();
    setWeb3(web3);
    // const accounts = await web3.eth.getAccounts();
    // setAccount(accounts[0]);
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
        <Row mgap="0 10px 0 0">
          <a href="https://twitter.com/HOESNFT">
            <FaTwitter color={theme.primaryLight} size="30" />
          </a>
          <a href="https://www.instagram.com/hoesnft">
            <FaInstagram color={theme.primaryLight} size="30" />
          </a>
          <a href="https://discord.gg/4VbaqFHP">
            <FaDiscord color={theme.primaryLight} size="30" />
          </a>
        </Row>
        <Button
          variant="royalBlue"
          onClick={() => {
            onConnectWallet();
          }}
        >
          <Text fontFamily="Open Sans" fontWeight="bold">
            {/* {account && account
              ? `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}`
              : "Connect Wallet"} */}
            Connect Wallet
          </Text>
        </Button>
      </Row>
    </Col>
  );
};
export default Navbar;
