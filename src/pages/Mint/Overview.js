import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import { Col } from "../../components/Layout";
import { Text } from "../../components/Text";
// import { Image } from "../../components/Image";

import { theme } from "../../theme";
import { OverviewSection, StyledOverview } from "../../style/Mint/style";

// import Logo1 from "../../assets/NFT/1.jpg";
// import Logo2 from "../../assets/NFT/2.jpg";
// import Logo3 from "../../assets/NFT/3.jpg";
// import Logo4 from "../../assets/NFT/4.jpg";
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
              <Text fontSize="20px" fontWeight="500" margin="20px 0 0 0">
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
            {/* <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={Logo1}
                  width="150px"
                  height="200px"
                  border={`1px solid ${theme.primaryLight}`}
                  borderRadius="10px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Logo1}
                  width="150px"
                  height="200px"
                  border={`1px solid ${theme.primaryLight}`}
                  borderRadius="10px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Logo1}
                  width="150px"
                  height="200px"
                  border={`1px solid ${theme.primaryLight}`}
                  borderRadius="10px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Logo1}
                  width="150px"
                  height="200px"
                  border={`1px solid ${theme.primaryLight}`}
                  borderRadius="10px"
                />
              </SwiperSlide>
            </Swiper> */}
          </StyledOverview>
        </Col>
      </Col>
    </OverviewSection>
  );
};
export default Overview;
