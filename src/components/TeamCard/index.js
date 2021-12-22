import React from "react";
import { Col, Row } from "../Layout";
import { Text } from "../Text";
import { Image } from "../Image";
import { theme } from "../../theme";
import styled from "styled-components";
import { Instgram, Linkedin } from "../SocialAvatar";
const SocialLink = styled.a`
  cursor: pointer;
`;
export const TeamCard = ({ name, role, src }) => {
  return (
    <Col align="center" width="180px" margin="15px 30px">
      <Image
        src={src}
        borderRadius="100%"
        width="180px"
        height="180px"
        border={`4px solid ${theme.bgRoyalBlue}`}
        objectFit="cover"
      />
      <Text
        color={theme.bgOrchid}
        fontSize="22px"
        fontWeight="bold"
        margin="15px 0 0 0"
      >
        {role}
      </Text>
      <Text fontSize="18px" margin="5px 0 0 0">
        {name}
      </Text>

      <Row mgap="0 5px 0 0" margin="3px 0 0 0">
        <SocialLink
          className="social-link social-link--twitter"
          target="_blank"
        >
          <Instgram />
        </SocialLink>
        <SocialLink
          className="social-link social-link--twitter"
          target="_blank"
        >
          <Linkedin />
        </SocialLink>
      </Row>
    </Col>
  );
};
