import React, { useEffect } from "react";
import $ from "jquery";
import { Text } from "../../components/Text";
import { Col } from "../../components/Layout";
import { theme } from "../../theme";
import "../../style/Mint/roadmap.css";
import { StyledRoadmap } from "../../style/Mint/style";
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
    <StyledRoadmap>
      <Col className="xxx" backgroundColor={theme.nftitem} align="center">
        <div className="dotborder"></div>
        <Text
          fontSize="55px"
          fontWeight="bold"
          fontFamily="horizon"
          margin="40px 0 0 0"
          className="roadmap_header"
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
                      <h4>The Drop</h4>
                    </div>
                    <div className="timeline-right">
                      <Text fontSize="20px" fontWeight="bold">
                        Following a successful launch, five Tesla Model 3’s are
                        headed straight to five of our holders to say thank
                        you*!
                      </Text>
                    </div>
                  </div>
                </li>
                <li className="in-view">
                  <div className="timeline-in">
                    <div className="timeline-left">
                      <Text fontSize="20px" fontWeight="bold">
                        Exclusive Content, events, and meetups are created for
                        our members.
                      </Text>
                    </div>
                    <div className="timeline-right">
                      <h4>The Community</h4>
                    </div>
                  </div>
                </li>
                <li className="in-view">
                  <div className="timeline-in">
                    <div className="timeline-left">
                      <h4>The Rewards</h4>
                    </div>
                    <div className="timeline-right">
                      <Text fontSize="20px" fontWeight="bold">
                        Owning your HERO NFT will grant exclusive whitelist
                        access to a follow up collection on the horizon...
                      </Text>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="timeline-in">
                    <div className="timeline-left">
                      <Text fontSize="20px" fontWeight="bold">
                        Owning a HERO punches your ticket to directing the
                        company. We want to empower our community and allow
                        their voice to be heard.
                      </Text>
                    </div>
                    <div className="timeline-right">
                      <h4>The Influence</h4>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="timeline-in">
                    <div className="timeline-left">
                      <h4>The Metaverse</h4>
                    </div>
                    <div className="timeline-right">
                      <Text fontSize="20px" fontWeight="bold">
                        We voyage into the Metaverse, where we plan to establish
                        various businesses where 100% of the profits will be
                        allocated to owners of a HERO NFT.
                      </Text>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Text fontSize="12px" padding="0 15px" align="center" fontWeight="bold">
          *The value of a Tesla Model 3 will be sent to your wallet if you are a
          winner
        </Text>
      </Col>
    </StyledRoadmap>
  );
};
export default Roadmap;
