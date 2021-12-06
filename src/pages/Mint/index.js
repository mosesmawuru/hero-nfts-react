import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import Team from "./Team";
import Roadmap from "./Roadmap";
import { Col } from "../../components/Layout";
const MintPage = () => {
  return (
    <Col>
      <Header />
      <Overview />
      <Roadmap />
      <Team />
    </Col>
  );
};
export default MintPage;
