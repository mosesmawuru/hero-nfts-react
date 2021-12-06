import React from "react";
import { Col, Grid } from "../../components/Layout";
import { Text } from "../../components/Text";
import { TeamCard } from "../../components/TeamCard";
import { theme } from "../../theme";
import { StyledTeam } from "../../style/Mint/style";
const data = [
  {
    name: "Adrian",
    role: "Co-founder",
  },

  {
    name: "Erik",
    role: "Co-founder",
  },
  {
    name: "Aaron Wolf",
    role: "Artist",
  },
  {
    name: "Tai Ming",
    role: "CTO",
  },
];
const Team = () => {
  return (
    <StyledTeam>
      <Col backgroundColor={theme.nftitem} align="center">
        <Col align="center" maxWidth="1300px" margin="0 0 40px 0">
          <Text
            fontSize="55px"
            fontWeight="bold"
            fontFamily="Montserrat"
            margin="30px 0 0"
            padding="0 40px"
            className="overview_header"
            wordBreak="break-word"
          >
            Team
          </Text>
          <Grid
            width="90%"
            grid={{ row: 1, col: 4 }}
            gap="8%"
            margin="30px 0 0 0"
            className="team_grid"
          >
            {data.map((item, key) => {
              return (
                <TeamCard name={item.name} role={item.role} key={key + 1} />
              );
            })}
          </Grid>
        </Col>
      </Col>
    </StyledTeam>
  );
};
export default Team;
