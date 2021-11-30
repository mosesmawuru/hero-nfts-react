import React, { useState } from "react";
// @import Component
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @import assets
import { theme } from "../../theme";
import { StyledHeader } from "../../style/Mint/style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

// @import assets
import backImg from "../../assets/meta.png";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const onMint = () => {
    if (count > 6) {
      toast.error("Max Mint count is 6");
    } else if (count < 1) {
      toast.error("Please check count");
    } else {
      toast.success("Success");
    }
  };
  return (
    <StyledHeader>
      <Image
        src={backImg}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
      />
      <Text
        fontSize="35px"
        fontWeight="bold"
        fontFamily="Montserrat"
        margin="50px 0 0"
        align="center"
        maxWidth="950px"
        padding="0 20px"
      >
        IN THE NEAR FUTURE, LORD ELON PRODUCED CLONES OF HIMSELF TO RULE WORLDS
        ACROSS THE METAVERSE AND BEYOND. THEY BECAME KNOWN AS HEROES OF
        EXTRATERRESTRIAL SOCIETIES
      </Text>

      <Col
        backdropFilter="blur(10px)"
        borderRadius="20px"
        width="100%"
        maxWidth="300px"
        padding="20px 0"
        border={`1px solid ${theme.primaryLight} !important`}
        align="center"
        mgap="0 0 20px 0"
      >
        <Col margin="10px 0 0 0" align="center">
          <Row>
            <DatePicker
              className="date-selector"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Enter Date"
            />
            <TimePicker className="time-selector" placeholder="Enter time" />
          </Row>
          <Col align="center" margin="20px 0 0">
            <Button variant="white">
              <Text
                fontFamily="Open Sans"
                color={theme.primaryDark}
                fontWeight="bold"
              >
                Set MintTime
              </Text>
            </Button>
          </Col>
        </Col>
        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
          margin="10px 0 0 0"
        >
          Mint Price: 0.069 ETH
        </Text>
        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
        >
          Max Mint Per Wallet: 6
        </Text>
        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
        >
          Total Mint: 0/6969
        </Text>
        <Input
          type="number"
          placeholder="Enter mint count"
          padding="10px 10px"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
        >
          Total ETH: {(count * 0.069).toFixed(3)} ETH
        </Text>
        <Button
          variant="white"
          onClick={() => {
            onMint();
          }}
        >
          <Text
            fontFamily="Open Sans"
            color={theme.primaryDark}
            fontWeight="bold"
          >
            Mint
          </Text>
        </Button>
      </Col>
      <Text fontSize="35px" fontWeight="Bold" margin="100px 0 30px 0">
        Minting soon
      </Text>
      <ToastContainer />
    </StyledHeader>
  );
};
export default Header;
