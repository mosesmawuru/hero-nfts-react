import React from "react";
import { Col } from "../Layout";
import { Text } from "../Text";
import { Image } from "../Image";
import empty from "../../assets/images/avatar/empty.png";
import { theme } from "../../theme";

export const TeamCard = ({ name, role }) => {
  return (
    <Col align="center">
      <Image
        src={empty}
        borderRadius="100%"
        width="100%"
        maxWidth="180px"
        maxHeight="180px"
        border={`4px solid ${theme.bgRoyalBlue}`}
      ></Image>
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
    </Col>
  );
};
