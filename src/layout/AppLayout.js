import React from "react";
//import Header & Footer
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Col } from "../components/Layout";
import ScrollTop from "../components/ScrollTop";
const AppLayout = ({ children }) => {
  return (
    <Col>
      <ScrollTop />
      <Navbar />
      {children}
      <Footer />
    </Col>
  );
};
export default AppLayout;
