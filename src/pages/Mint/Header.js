import React from "react";
// @import Component
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
// @import assets
import { StyledHeader } from "../../style/Mint/style";
// @import assets
import backImg from "../../assets/background.jpg";
const Header = () => {
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
      >
        IN THE NEAR FUTURE, LORD ELON PRODUCED CLONES OF HIMSELF TO RULE WORLDS
        ACROSS THE METAVERSE AND BEYOND. THEY BECAME KNOWN AS HEROES OF
        EXTRATERRESTRIAL SOCIETIES
      </Text>
      <Text fontSize="35px" fontWeight="500">
        Minting soon
      </Text>
    </StyledHeader>
  );
};
export default Header;
