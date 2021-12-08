import React, { useEffect } from "react";
import $ from "jquery";
import { Text } from "../../components/Text";
import { Col } from "../../components/Layout";
import { theme } from "../../theme";
import "../../style/Mint/roadmap.css";
const Roadmap = () => {
  useEffect(() => {
    listenToScrollEvent();
  });
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      var items = $(".timeline li"),
        greyLine = $(".default-line"),
        lineToDraw = $(".draw-line");
      // sets the height that the greyLine (.default-line) should be according to `.timeline ul` height
      // run this function only if draw line exists on the page
      if (lineToDraw.length) {
        $(window).on("scroll", function () {
          // Need to constantly get '.draw-line' height to compare against '.default-line'

          var greyLineHeight = greyLine.height(),
            windowDistance = $(window).scrollTop(),
            windowHeight = $(window).height() / 2,
            timelineDistance = $(".timeline").offset().top;

          if (windowDistance >= timelineDistance - windowHeight) {
            var line = windowDistance - timelineDistance + windowHeight;

            if (line <= greyLineHeight) {
              lineToDraw.css({
                height: line + 20 + "px",
              });
            }
          }

          // This takes care of adding the class in-view to the li:before items
          var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
          items.each(function (index) {
            var circlePosition = $(this).offset();

            if (bottom > circlePosition.top) {
              $(this).addClass("in-view");
            } else {
              $(this).removeClass("in-view");
            }
          });
        });
      }
    });
  };

  return (
    <Col className="xxx" backgroundColor={theme.nftitem} align="center">
      <Text
        fontSize="55px"
        fontWeight="bold"
        fontFamily="Montserrat"
        margin="0 0 50px 0"
      >
        ROADMAP
      </Text>
      <section className="sec-padd">
        <div className="container">
          <div className="timeline">
            <ul>
              <span className="default-line"></span>
              <span
                className="draw-line"
                style={{ height: "910.391px" }}
              ></span>
              <li className="in-view">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <h4>Giving Back</h4>
                  </div>
                  <div className="timeline-right">
                    <Text fontSize="20px" fontWeight="bold">
                      Once all 6969 unique NFTs have been minted, we will be
                      giving away the value of a tesla Model 3 in Eth to 5
                      random wallets. Each purchase is a single entry, but each
                      wallet can only win once.
                    </Text>
                  </div>
                </div>
              </li>
              <li className="in-view">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <Text fontSize="20px" fontWeight="bold">
                      We want this project to be about community. Joining the
                      society will grant access to exclusive content, events,
                      and meetups each year.
                    </Text>
                  </div>
                  <div className="timeline-right">
                    <h4>Community exclusives</h4>
                  </div>
                </div>
              </li>
              <li className="in-view">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <h4>Rewards </h4>
                  </div>
                  <div className="timeline-right">
                    <Text fontSize="20px" fontWeight="bold">
                      Owning a Hero will grant exclusive minting access to a
                      complimentary wives collection. With breeding children on
                      the horizon.
                    </Text>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <Text fontSize="20px" fontWeight="bold">
                      Owning HOES grants voting rights in the direction of the
                      project. We want to empower our community and allow them
                      to take action.
                    </Text>
                  </div>
                  <div className="timeline-right">
                    <h4>Power</h4>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <h4>Metaverse corporation </h4>
                  </div>
                  <div className="timeline-right">
                    <Text fontSize="20px" fontWeight="bold">
                      Don’t want to spoil too much but we plan to establish
                      various businesses in the metaverse, beginning in
                      Decentraland. All profits from these various business will
                      100% be redistributed to holders of
                    </Text>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Col>
  );
};
export default Roadmap;
