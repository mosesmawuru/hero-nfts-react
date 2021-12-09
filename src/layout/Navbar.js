import React from "react";
// @import wallet connection
import { useEthContext } from "../context/EthereumContext";
// @import component
import { Row, Col } from "../components/Layout";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Instgram, Twitter, Discord } from "../components/SocialIcon";
// @import style
import styled from "styled-components";
import { theme } from "../theme";
const SocialLink = styled.a`
  @media screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;
const Navbar = () => {
  const { provider, currentAcc } = useEthContext();
  const handleConnectWallet = async () => {
    await provider.request({ method: `eth_requestAccounts` });
  };
  return (
    <Col
      height="60px"
      backgroundColor={theme.primaryLight}
      align="center"
      justify="center"
      padding="5px 5px"
      width="calc(100% - 10px)"
    >
      <Row justify="space-between" width="100%" maxWidth="1300px">
        <Row mgap="0 5px 0 0">
          <SocialLink
            href="https://twitter.com/HOESNFT"
            className="social-link social-link--twitter"
            target="_blank"
          >
            <Twitter />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/hoesnft"
            className="social-link social-link--instagram"
            target="_blank"
          >
            <Instgram />
          </SocialLink>
          <SocialLink
            href="https://discord.gg/gnrudFs44M"
            className="social-link social-link--discord"
            target="_blank"
          >
            <Discord />
          </SocialLink>
        </Row>
        <Button
          variant="lightBlue"
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
