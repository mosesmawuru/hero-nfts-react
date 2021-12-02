import React, { useState, useEffect, useRef } from "react";
import { Col } from "../../components/Layout";
import { Text } from "../../components/Text";
import { Progress } from "../../components/Progress";
import { AnimationView, Dot, StyledMap } from "../../style/Mint/style";
import { theme } from "../../theme";
const Roadmap = () => {
  const [position, setPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const myRef = useRef();
  const getListSize = () => {
    const newHeight = myRef.current.clientHeight;
    setHeight(newHeight);
  };
  useEffect(() => {
    getListSize();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);
  useEffect(() => {
    listenToScrollEvent();
  });
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setPosition(scrollPostion);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  return (
    <Col className="xxx" backgroundColor={theme.nftitem} align="center">
      <Text
        fontSize="55px"
        fontWeight="bold"
        fontFamily="Montserrat"
        margin="30px 0 50px 0"
      >
        Roadmap111
        {/* {height} */}
        {/* {position} */}
      </Text>
      <AnimationView>
        <Progress>
          <div
            style={{
              width: "100%",
              backgroundColor: `${theme.bgLightBlue}`,
              height: `calc(80%)`,
            }}
          ></div>
        </Progress>
        <StyledMap ref={myRef}>
          <Dot scaleSize={0.9} />

          <Text
            fontSize="30px"
            fontWeight="bold"
            color={theme.bgLightBlue}
            width="50%"
            maxWidth="50%"
            className="first"
            opacity={"1"}
          >
            Welcome
          </Text>
          <Text
            fontSize="20px"
            fontWeight="500"
            width="50%"
            maxWidth="50%"
            align="left"
            className="second"
            opacity={"1"}
          >
            1) Once all 6969 unique NFTs have been minted, we will be giving
            away the value of a tesla Model 3 in Eth to 5 random wallets. Each
            purchase is a single entry, but each wallet can only win once.
          </Text>
        </StyledMap>
        <StyledMap ref={myRef} className="reverse">
          <Dot scaleSize={0.9} />
          <Text
            fontSize="20px"
            fontWeight="500"
            width="50%"
            maxWidth="50%"
            align="left"
            className="first"
            opacity={"1"}
          >
            2) We want this project to be about community. Joining the society
            will grant access to exclusive content, events, and meetups each
            year.
          </Text>
          <Text
            fontSize="30px"
            fontWeight="bold"
            color={theme.bgLightBlue}
            width="50%"
            maxWidth="50%"
            opacity={"1"}
          >
            Marketing campaigns
          </Text>
        </StyledMap>
        <StyledMap ref={myRef}>
          <Dot scaleSize={0.9} />
          <Text
            fontSize="30px"
            fontWeight="bold"
            color={theme.bgLightBlue}
            width="50%"
            maxWidth="50%"
            className="first"
            opacity={"1"}
          >
            Rewards
          </Text>
          <Text
            fontSize="20px"
            fontWeight="500"
            width="50%"
            maxWidth="50%"
            align="left"
            className="second"
            opacity={"1"}
          >
            3) Owning a Hero will grant exclusive minting access to a
            complimentary wives collection. With breeding children on the
            horizon.
          </Text>
        </StyledMap>
        <StyledMap ref={myRef} className="reverse">
          <Dot scaleSize={0.9} />
          <Text
            fontSize="20px"
            fontWeight="500"
            width="50%"
            maxWidth="50%"
            align="left"
            className="first"
            opacity={"1"}
          >
            4) Owning HOES grants voting rights in the direction of the project.
            We want to empower our community and allow them to take action.
          </Text>
          <Text
            fontSize="30px"
            fontWeight="bold"
            color={theme.bgLightBlue}
            width="50%"
            maxWidth="50%"
            opacity={"1"}
          >
            Merch
          </Text>
        </StyledMap>
        <StyledMap ref={myRef}>
          <Dot scaleSize={0.9} />
          <Text
            fontSize="30px"
            fontWeight="bold"
            color={theme.bgLightBlue}
            width="50%"
            maxWidth="50%"
            className="first"
            opacity={"1"}
          >
            Cmmunity
          </Text>
          <Text
            fontSize="20px"
            fontWeight="500"
            width="50%"
            maxWidth="50%"
            align="left"
            className="second"
            opacity={"1"}
          >
            5) Don’t want to spoil too much but we plan to establish various
            businesses in the metaverse, beginning in Decentraland. All profits
            from these various business will 100% be redistributed to holders of
          </Text>
        </StyledMap>
      </AnimationView>
      {/* <Col
        maxWidth="1300px"
        mgap="0 0 10px 0"
        margin="20px 0 50px 0"
        padding="0 30px"
        width="calc(100% - 60px)"
        ref={myRef}
      >
        <Text fontSize="24px" fontWeight="500">
          1) Once all 6969 unique NFTs have been minted, we will be giving away
          the value of a tesla Model 3 in Eth to 5 random wallets. Each purchase
          is a single entry, but each wallet can only win once.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          2) We want this project to be about community. Joining the society
          will grant access to exclusive content, events, and meetups each year.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          3) Owning a Hero will grant exclusive minting access to a
          complimentary wives collection. With breeding children on the horizon.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          4) Owning HOES grants voting rights in the direction of the project.
          We want to empower our community and allow them to take action.
        </Text>
        <Text fontSize="24px" fontWeight="500">
          5) Don’t want to spoil too much but we plan to establish various
          businesses in the metaverse, beginning in Decentraland. All profits
          from these various business will 100% be redistributed to holders of
        </Text>
      </Col> */}
    </Col>
  );
};
export default Roadmap;
