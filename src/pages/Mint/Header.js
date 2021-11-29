import React, { useState } from "react";
// @import Component
import { Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
// @import assets
import { theme } from "../../theme";
import { StyledHeader } from "../../style/Mint/style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// @import assets
import backImg from "../../assets/background.jpg";
const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
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
        fontSize="55px"
        fontWeight="500"
        fontFamily="Aladin"
        margin="30px 0 0"
        align="center"
        maxWidth="1100px"
        padding="0 20px"
      >
        IN THE NEAR FUTURE, LORD ELON PRODUCED CLONES OF HIMSELF TO RULE WORLDS
        ACROSS THE METAVERSE AND BEYOND. THEY BECAME KNOWN AS HEROES OF
        EXTRATERRESTRIAL SOCIETIES
      </Text>

      <Row>
        <DatePicker
          className="date-selector"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <Button variant="white">
          <Text
            fontFamily="Open Sans"
            color={theme.primaryDark}
            fontWeight="bold"
          >
            Set MintTime
          </Text>
        </Button>
      </Row>
      <Row mgap="0 20px 0 0" margin="30px 0 200px 0">
        <Input type="text" placeholder="Enter mint count" padding="10px 10px" />
        <Button variant="white">
          <Text
            fontFamily="Open Sans"
            color={theme.primaryDark}
            fontWeight="bold"
          >
            Mint
          </Text>
        </Button>
      </Row>
      <Text fontSize="35px" fontWeight="Bold" margin="0 0 30px 0">
        Minting soon
      </Text>
    </StyledHeader>
  );
};
export default Header;
