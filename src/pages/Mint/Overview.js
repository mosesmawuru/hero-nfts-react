import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/react/swiper.js";
import { Col } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
// import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.js";
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/pagination/pagination.min.css"; // Pagination module
import "swiper/modules/scrollbar/scrollbar.min.css"; // Pagination module
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/lazy/lazy.min.css";
import { theme } from "../../theme";
import { OverviewSection, StyledOverview } from "../../style/Mint/style";

import Logo1 from "../../assets/NFT/1.jpg";
import Logo2 from "../../assets/NFT/2.jpg";
import Logo3 from "../../assets/NFT/3.jpg";
import Logo4 from "../../assets/NFT/4.jpg";
import Logo5 from "../../assets/NFT/5.jpg";
import Logo6 from "../../assets/NFT/6.jpg";
import Logo7 from "../../assets/NFT/7.jpg";
import Logo8 from "../../assets/NFT/8.jpg";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, Keyboard, Scrollbar, Navigation, Pagination]);

const full_data = [
  { src: Logo1 },
  { src: Logo2 },
  { src: Logo3 },
  { src: Logo4 },
  { src: Logo5 },
  { src: Logo6 },
  { src: Logo7 },
  { src: Logo8 },
];
const sub_data1 = [
  { src: Logo1 },
  { src: Logo2 },
  { src: Logo3 },
  { src: Logo4 },
];
const sub_data2 = [
  { src: Logo5 },
  { src: Logo6 },
  { src: Logo7 },
  { src: Logo8 },
];
const Overview = () => {
  return (
    <OverviewSection>
      <Col backgroundColor={theme.nftitem} align="center">
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
            Meet the Heroes
          </Text>
          <StyledOverview>
            <Col>
              <Text
                fontSize="16.5px"
                fontWeight="500"
                margin="20px 0 0 0"
                align="center"
              >
                The Heroes of Extraterrestrial Societies is a collection of 6969
                unique Elon Musk inspired NFTs - unique digital collectibles
                living on the Ethereum Blockchain. Each hero is unique and
                programmatically generated from over 100 possible traits,
                including expressions, clothing, accessories, and more. Your
                hero can serve as your digital profile, but is more importantly
                a piece of a major corporation in the metaverse. Heroes mint at
                a price of 0.069 Eth each and each wallet is limited to 6 units.
              </Text>
            </Col>
            <Col margin="30px 0 0 0">
              <Swiper
                spaceBetween={1}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                clickable={true}
                className="mySwiper"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  850: {
                    slidesPerView: 3,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
              >
                {full_data.map((item, key) => {
                  return (
                    <SwiperSlide key={key + 1}>
                      <Image
                        src={item.src}
                        width="200px"
                        height="275px"
                        border={`2px solid ${theme.bgLightBlue}`}
                        borderRadius="10px"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
            <Col margin="30px 0 0 0">
              <Swiper
                spaceBetween={1}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                clickable={true}
                className="subSwiper"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  590: {
                    slidesPerView: 2,
                  },
                }}
              >
                {sub_data1.map((item, key) => {
                  return (
                    <SwiperSlide key={key + 1}>
                      <Image
                        src={item.src}
                        width="200px"
                        height="275px"
                        border={`2px solid ${theme.bgLightBlue}`}
                        borderRadius="10px"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
            <Col margin="30px 0 0 0">
              <Swiper
                spaceBetween={1}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                clickable={true}
                className="subSwiper"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  590: {
                    slidesPerView: 2,
                  },
                }}
              >
                {sub_data2.map((item, key) => {
                  return (
                    <SwiperSlide key={key + 1}>
                      <Image
                        src={item.src}
                        width="200px"
                        height="275px"
                        border={`2px solid ${theme.bgLightBlue}`}
                        borderRadius="10px"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </StyledOverview>
        </Col>
      </Col>
    </OverviewSection>
  );
};
export default Overview;
