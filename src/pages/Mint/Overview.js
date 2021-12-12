import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/react/swiper.js";
import { Text } from "../../components/Text";
import { Col, Row } from "../../components/Layout";
import { MeetSlider } from "../../components/MeetSlider";
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
  useEffect(() => {
    // I hope this over-commenting helps. Let's do this!
    // Let's use the 'active' variable to let us know when we're using it
    let active = false;

    // First we'll have to set up our event listeners
    // We want to watch for clicks on our scroller
    var el = document.querySelector(".scroller");

    if (el) {
      el.addEventListener("mousedown", function () {
        active = true;
        // Add our scrolling class so the scroller has full opacity while active
        el.classList.add("scrolling");
      });
    }

    // We also want to watch the body for changes to the state,
    // like moving around and releasing the click
    // so let's set up our event listeners
    document.body.addEventListener("mouseup", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("mouseleave", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });

    // Let's figure out where their mouse is at
    document.body.addEventListener("mousemove", function (e) {
      if (!active) return;
      // Their mouse is here...
      let x = e.pageX;
      // but we want it relative to our wrapper
      x -= document.querySelector(".wrapper").getBoundingClientRect().left;
      // Okay let's change our state
      scrollIt(x);
    });

    // Let's use this function
    function scrollIt(x) {
      let transform = Math.max(
        0,
        Math.min(x, document.querySelector(".wrapper").offsetWidth)
      );
      document.querySelector(".after").style.width = transform + "px";
      document.querySelector(".scroller").style.left = transform - 25 + "px";
    }

    // Let's set our opening state based off the width,
    // we want to show a bit of both images so the user can see what's going on
    scrollIt(150);

    // And finally let's repeat the process for touch events
    // first our middle scroller...
    document
      .querySelector(".scroller")
      .addEventListener("touchstart", function () {
        active = true;
        document.querySelector(".scroller").classList.add("scrolling");
      });
    document.body.addEventListener("touchend", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("touchcancel", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
  });
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
              >
                Each hero is unique and programmatically generated from over 100
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
              >
                Heroes mint at a price of 0.1 Eth each and each wallet is
                limited to 6 units.
              </Text>
            </Col>
          </Col>
          <MeetSlider />
        </Row>
      </Col>
    </OverviewSection>
  );
};
export default Overview;
