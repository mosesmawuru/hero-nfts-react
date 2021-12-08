import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import Digital from "./Digital";
import Roadmap from "./Roadmap";
import Team from "./Team";
import { Col } from "../../components/Layout";
import { theme } from "../../theme";
const MintPage = () => {
  return (
    <Col backgroundColor={theme.nftitem} maxwidth="1300px">
      <Header />
      <Overview />
      <Digital />
      <Roadmap />
      <Team />
    </Col>
  );
};
export default MintPage;
