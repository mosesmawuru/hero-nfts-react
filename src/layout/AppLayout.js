import React from "react";
//import Header & Footer
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Col } from "../components/Layout";
const AppLayout = ({ children }) => {
  return (
    <Col>
      <Navbar />
      {children}
      <Footer />
    </Col>
  );
};
export default AppLayout;
