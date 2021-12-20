import React from "react";
import { Text } from "../../components/Text";
import { Col, Row } from "../../components/Layout";
import { TeamCard } from "../../components/TeamCard";

import { theme } from "../../theme";
import { StyledTeam } from "../../style/Mint/style";
import { teamdata } from "../../contract/teamdata";
const Team = () => {
  return (
    <StyledTeam>
      <div className="dotborder"></div>
      <Col backgroundColor={theme.nftitem} align="center">
        <Col align="center" maxWidth="1300px" margin="0 0 40px 0">
          <Text
            fontSize="55px"
            fontWeight="bold"
            fontFamily="horizon"
            margin="40px 0 0 0"
            className="team_header"
          >
            Team
          </Text>
          <Row wrap="wrap" width="90%" margin="30px 0 0 0">
            {teamdata.map((item, key) => {
              return (
                <TeamCard
                  name={item.name}
                  role={item.role}
                  src={item.src}
                  key={key + 1}
                />
              );
            })}
          </Row>
        </Col>
      </Col>
    </StyledTeam>
  );
};
export default Team;
