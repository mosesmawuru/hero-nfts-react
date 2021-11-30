import React, { useEffect, useContext } from "react";
import Header from "./Header";
import Overview from "./Overview";
import Roadmap from "./Roadmap";
import { Col } from "../../components/Layout";
// @connect wallet using web3
import getWeb3 from "../../getWeb3";
import Web3 from "../../context/web3";
const MintPage = () => {
  const { setWeb3 } = useContext(Web3);
  useEffect(() => {
    // get web3
    async function initWeb3() {
      const web3 = await getWeb3();
      setWeb3(web3);
    }
    initWeb3();
  }, []);
  return (
    <Col>
      <Header />
      <Overview />
      <Roadmap />
    </Col>
  );
};
export default MintPage;
