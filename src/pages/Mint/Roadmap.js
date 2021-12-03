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

  // const calculateScrollDistance = () => {
  //   const scrollTop = window.pageYOffset; // how much the user has scrolled by
  //   const winHeight = window.innerHeight;
  //   const docHeight = getDocHeight();

  //   const totalDocScrollLength = docHeight - winHeight;
  //   const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

  //   setPosition(scrollPostion);
  // };

  // const getDocHeight = () => {
  //   return Math.max(
  //     document.body.scrollHeight,
  //     document.documentElement.scrollHeight,
  //     document.body.offsetHeight,
  //     document.documentElement.offsetHeight,
  //     document.body.clientHeight,
  //     document.documentElement.clientHeight
  //   );
  // };

  return (
    <Col className="xxx" backgroundColor={theme.nftitem} align="center">
      <Text
        fontSize="55px"
        fontWeight="bold"
        fontFamily="Montserrat"
        margin="30px 0 50px 0"
      >
        Roadmap
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
                    <h4>Welcome</h4>
                  </div>
                  <div className="timeline-right">
                    <p>
                      1) Once all 6969 unique NFTs have been minted, we will be
                      giving away the value of a tesla Model 3 in Eth to 5
                      random wallets. Each purchase is a single entry, but each
                      wallet can only win once.
                    </p>
                  </div>
                </div>
              </li>
              <li className="in-view">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <p>
                      2)We want this project to be about community. Joining the
                      society will grant access to exclusive content, events,
                      and meetups each year.
                    </p>
                  </div>
                  <div className="timeline-right">
                    <h4>Marketing campaigns</h4>
                  </div>
                </div>
              </li>
              <li className="in-view">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <h4>Rewards </h4>
                  </div>
                  <div className="timeline-right">
                    <p>
                      3)Owning a Hero will grant exclusive minting access to a
                      complimentary wives collection. With breeding children on
                      the horizon.
                    </p>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <p>
                      4)Owning HOES grants voting rights in the direction of the
                      project. We want to empower our community and allow them
                      to take action.
                    </p>
                  </div>
                  <div className="timeline-right">
                    <h4>Merch</h4>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="timeline-in">
                  <div className="timeline-left">
                    <h4>Giveaways </h4>
                  </div>
                  <div className="timeline-right">
                    <p>
                      5) Don’t want to spoil too much but we plan to establish
                      various businesses in the metaverse, beginning in
                      Decentraland. All profits from these various business will
                      100% be redistributed to holders of
                    </p>
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
