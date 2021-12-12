import React from "react";
import { Text } from "../../components/Text";
import { Col, Grid } from "../../components/Layout";
import { TeamCard } from "../../components/TeamCard";

import { theme } from "../../theme";
import { StyledTeam } from "../../style/Mint/style";
import Aaron from "../../assets/images/avatar/Aaron_wolf.jpg";
import Adrian from "../../assets/images/avatar/Adrian.jpg";
import Eric_wolf from "../../assets/images/avatar/Eric_wolf.jpg";
import Taiming from "../../assets/images/avatar/Tai_cto.jpg";

const data = [
  {
    name: "Adrian",
    role: "Co-founder",
    src: Adrian,
  },

  {
    name: "Erik",
    role: "Co-founder",
    src: Eric_wolf,
  },
  {
    name: "Aaron Wolf",
    role: "Artist",
    src: Aaron,
  },
  {
    name: "Tai Ming",
    role: "CTO",
    src: Taiming,
  },
];
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
          <Grid
            width="90%"
            grid={{ row: 1, col: 4 }}
            gap="8%"
            margin="30px 0 0 0"
            className="team_grid"
          >
            {data.map((item, key) => {
              return (
                <TeamCard
                  name={item.name}
                  role={item.role}
                  src={item.src}
                  key={key + 1}
                />
              );
            })}
          </Grid>
        </Col>
      </Col>
    </StyledTeam>
  );
};
export default Team;
