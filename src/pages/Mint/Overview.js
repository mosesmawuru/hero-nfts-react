import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/react/swiper.js";
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
// import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.js";
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module
import "swiper/modules/scrollbar/scrollbar.min.css"; // Pagination module
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/lazy/lazy.min.css";
import { theme } from "../../theme";
import { OverviewSection } from "../../style/Mint/style";

import SwiperCore, {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, Keyboard, Scrollbar, Navigation, Pagination]);

const Overview = () => {
  return (
    <OverviewSection>
      <Row backgroundColor={theme.nftitem} align="center">
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
            MEET THE HEROES
          </Text>

          <Col>
            <Text
              fontSize="20px"
              fontWeight="500"
              margin="20px 0 0 0"
              align="center"
              padding="0 15px"
            >
              The Heroes of Extraterrestrial Societies is a collection of 6969
              unique Elon Musk inspired NFTs - unique digital collectibles
              living on the Ethereum Blockchain. Each hero is unique and
              programmatically generated from over 100 possible traits,
              including expressions, clothing, accessories, and more. Your hero
              can serve as your digital profile, but is more importantly a piece
              of a major corporation in the metaverse. Heroes mint at a price of
              0.11 Eth each and each wallet is limited to 6 units.
            </Text>
          </Col>
        </Col>
      </Row>
    </OverviewSection>
  );
};
export default Overview;
