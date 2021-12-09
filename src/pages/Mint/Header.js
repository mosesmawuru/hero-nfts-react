import React from "react";
// @import Component
// import { toast, ToastContainer } from "react-toastify";
import { Col, Row } from "../../components/Layout";
// import { Button } from "../../components/Button";
// import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { MintButton } from "../../components/MintButton";

// import DatePicker from "react-datepicker";
// @import assets
import { StyledHeader } from "../../style/Mint/style";
// import { theme } from "../../theme";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
// @import wallet connection
// import { useEthContext } from "../../context/EthereumContext";
// import {
//    contract_address,
//    admin_address,
//    client_address,
// } from "../../contract/address";
// import { contractABI } from "../../contract/ABI";
// @import assets
import backImg from "../../assets/images/black.png";
import spaceImg from "../../assets/images/space2.png";
// import dotImg from "../../assets/images/effects/3dots.gif";
// import pink_circle from "../../assets/images/effects/pink_circle.gif";
// import stone from "../../assets/images/effects/stone.gif";
// import zebro_circle from "../../assets/images/effects/zebro_circle.gif";

const Header = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [startTime, setStartTime] = useState("");
  // const [selledCount, setSelledCount] = useState(0);
  // const [count, setCount] = useState(0);
  // const { web3, currentAcc } = useEthContext();
  // const onMint = async () => {
  //   if (count > 6) {
  //     toast.error("Max Mint count is 6");
  //   } else if (count < 1) {
  //     toast.error("Please check count");
  //   } else {
  //     const contract = new web3.eth.Contract(contractABI, contract_address);
  //     await contract.methods
  //       .mintNFT(await web3.utils.toWei(count, "ether"))
  //       .send({
  //         from: currentAcc,
  //         value: await web3.utils.toWei(
  //           (count * 0.11).toFixed(2).toString(),
  //           "ether"
  //         ),
  //       })
  //       .on("receipt", function (receipt) {
  //         toast("Success!");
  //       })
  //       .on("error", function (error) {
  //         toast(error);
  //       });
  //   }
  // };
  // const setMintTime = async () => {
  //   if (startTime) {
  //     const time = startTime.split(":");
  //     const sendTime = new Date(
  //       new Date(startDate).getFullYear(),
  //       new Date(startDate).getMonth() + 1,
  //       new Date(startDate).getDate(),
  //       Number(time[0]),
  //       Number(time[1]),
  //       Number(time[2])
  //     ).valueOf();
  //     const contract = new web3.eth.Contract(contractABI, contract_address);
  //     await contract.methods
  //       .setMintTime(sendTime / 1000)
  //       .send({
  //         from: currentAcc,
  //         value: "0",
  //       })
  //       .then((res) => {
  //         toast.success("Successfully settled the mint start time.");
  //       })
  //       .catch((err) => {
  //         toast.error(err);
  //       });
  //   } else {
  //     toast.error("Please check mint starting time.");
  //   }
  // };
  // const getBalance = async () => {
  //   if (web3) {
  //     const contract = new web3.eth.Contract(
  //       contractABI,
  //       contract_address
  //     );
  //     await contract.methods
  //       .getRestSupply()
  //       .call()
  //       .then((res) => {
  //         setSelledCount(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };
  // const onChangeCount = (num) => {
  //   setCount(num);
  //   if (num >= 1 && 6 >= num) {
  //     setCount(num);
  //   } else {
  //     setCount(num);
  //   }
  // };

  return (
    <StyledHeader background={`url(${backImg})`}>
      <Col align="center" margin="50px 0 0 0">
        <Row className="header_view" align="flex-start">
          <Text
            className="header-text"
            fontSize="59px"
            fontWeight="bold"
            fontFamily="Horizon"
            maxWidth="950px"
            padding="0 20px"
            lineHeight="100px"
            align="left"
          >
            HEROES
            <br /> OF
            <br /> EXTRATERRESTRIAL
            <br /> SOCIETIES
          </Text>
          {/* <Row className="space-img" /> */}
          <Image width="300px" src={spaceImg} />

          {/* <Col
        width="100%"
        align="center"
        margin="30px 0 0 0"
        mgap="0 0 10px 0"
        maxWidth="300px"
        padding="20px 0"
        backdropFilter="blur(10px)"
        borderRadius="20px"
        border={`1px solid ${theme.primaryLight} !important`}
      >
        {currentAcc ? (
          <Col margin="10px 0 0 0" align="center">
            <DatePicker
              className="date-selector"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Enter Date"
            />

            <Col margin="20px 0 0 0" align="center">
              <input
                id="appt-time"
                className="appt-time"
                type="time"
                name="appt-time"
                step="2"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Col>

            <Col align="center" margin="20px 0 0">
              <Button
                variant="orchid"
                onClick={() => {
                  setMintTime();
                }}
              >
                <Text fontSize="20px" fontWeight="bold">
                  Set MintTime
                </Text>
              </Button>
            </Col>
          </Col>
        ) : (
          ""
        )}

        <Text
          fontSize="25px"
          fontWeight="bold"
          align="center"
          maxWidth="1100px"
          margin="10px 0 0 0"
        >
          Mint Price: 0.11 ETH
        </Text>
        <Text fontSize="25px" fontWeight="bold" align="center">
          Max Mint Per Wallet: 6
        </Text>
        <Text fontSize="25px" fontWeight="bold" align="center">
          Total Mint: 0/6969
        </Text>
        <Input
          type="number"
          placeholder="Enter mint count"
          disabled={currentAcc ? false : true}
          padding="10px 10px"
          maxWidth="160px"
          value={count}
          onChange={(e) => {
            onChangeCount(e.target.value);
          }}
        />

        <Text
          fontSize="25px"
          fontWeight="bold"
          align="center"
          maxWidth="1100px"
        >
          Total ETH: {(count * 0.11).toFixed(2)} ETH
        </Text>
        <Button
          variant="lightBlue"
          disabled={currentAcc ? false : true}
          onClick={() => {
            onMint();
          }}
        >
          <Text fontSize="20px" fontWeight="bold">
            Mint
          </Text>
        </Button>
      </Col> */}
        </Row>
        <Col align="center">
          <MintButton>
            <Text
              fontSize="40px"
              fontWeight="500"
              fontFamily="Bebas Neue"
              align="center"
            >
              Minting soon
            </Text>
          </MintButton>
        </Col>

        {/* <ToastContainer /> */}
      </Col>
    </StyledHeader>
  );
};
export default Header;
