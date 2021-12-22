import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/react/swiper.js";
import { Text } from "../../components/Text";
import { Col, Row } from "../../components/Layout";
import { Image } from "../../components/Image";
// import { MeetSlider } from "../../components/MeetSlider";
// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper-bundle.js";
// import "swiper/modules/navigation/navigation.min.css"; // Navigation module
// import "swiper/modules/pagination/pagination.min.css"; // Pagination module
// import "swiper/modules/scrollbar/scrollbar.min.css"; // Pagination module
// import "swiper/modules/effect-fade/effect-fade.min.css";
// import "swiper/modules/lazy/lazy.min.css";
import { theme } from "../../theme";
import { OverviewSection } from "../../style/Mint/style";

import Elon2 from "../../assets/images/NFT/10.jpg";
// import line from "../../assets/images/line.png";

// import SwiperCore, {
//   Autoplay,
//   Keyboard,
//   Scrollbar,
//   Navigation,
//   Pagination,
// } from "swiper";

// SwiperCore.use([Autoplay, Keyboard, Scrollbar, Navigation, Pagination]);

const Overview = () => {
  return (
    <OverviewSection>
      <Col align="center" margin="30px 0 0">
        {/* <Image src={line} width="95%" /> */}
        <div className="dotborder"></div>

        <Row
          backgroundColor={theme.nftitem}
          align="flex-start"
          maxWidth="1200px"
          padding="0 20px"
          margin="30px 0 0"
          className="overview_container"
          borderStyle="dotted"
        >
          <Col align="center" maxWidth="1300px">
            <Text
              fontSize="55px"
              padding="0 40px"
              className="overview_header"
              wordBreak="break-word"
              fontFamily="horizon"
              align="center"
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
                className="overview_description"
                width="100%"
              >
                The Heroes of Extraterrestrial Societies is a collection of
                10000 unique Elon Musk inspired NFTs - unique digital
                collectibles living on the Ethereum Blockchain.
              </Text>
              <Text
                fontSize="20px"
                fontWeight="500"
                align="center"
                padding="0 15px"
                margin="10px 0 0 0"
                className="overview_description"
                width="100%"
              >
                Each hero is unique and programmatically generated from over 250
                possible traits, including expressions, clothing, accessories,
                and more.
              </Text>
              <Text
                fontSize="20px"
                fontWeight="500"
                align="center"
                padding="0 15px"
                margin="10px 0 0 0"
                className="overview_description"
                width="100%"
              >
                Your hero can serve as your digital profile, but is more
                importantly a piece of a major corporation in the metaverse.
              </Text>
              <Text
                fontSize="20px"
                fontWeight="500"
                align="center"
                padding="0 15px"
                margin="10px 0 0 0"
                className="overview_description"
                width="100%"
              >
                Heroes mint at a price of 0.1 Eth each and each wallet is
                limited to 6 units.
              </Text>
            </Col>
          </Col>
          <Image
            border="8px solid #dfe0e0"
            borderRadius="20px"
            src={Elon2}
            maxWidth="260px"
            height="300px"
            width="100%"
          />
        </Row>
      </Col>
    </OverviewSection>
  );
};
export default Overview;
