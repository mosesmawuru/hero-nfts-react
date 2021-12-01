import React from "react";
// @import wallet connection
import { useEthContext } from "../context/EthereumContext";
// @import social icon
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
// @import component
import { Row, Col } from "../components/Layout";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
// @import style
import { theme } from "../theme";

const Navbar = () => {
  const { provider, currentAcc } = useEthContext();
  const handleConnectWallet = async () => {
    await provider.request({ method: `eth_requestAccounts` });
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
            handleConnectWallet();
          }}
        >
          <Text fontFamily="Open Sans" fontWeight="bold">
            {currentAcc && currentAcc
              ? `${currentAcc.slice(0, 6)}...${currentAcc.slice(
                  currentAcc.length - 4,
                  currentAcc.length
                )}`
              : "Connect Wallet"}
          </Text>
        </Button>
      </Row>
    </Col>
  );
};
export default Navbar;
