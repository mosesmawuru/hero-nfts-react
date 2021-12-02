import React, { useState } from "react";
// @import Component
import { toast, ToastContainer } from "react-toastify";
import { Col } from "../../components/Layout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import DatePicker from "react-datepicker";
// @import assets
import { StyledHeader } from "../../style/Mint/style";
import { theme } from "../../theme";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "rc-time-picker/assets/index.css";
// @import wallet connection
import { useEthContext } from "../../context/EthereumContext";
import {
  contract_address,
  // admin_address,
  // client_address,
} from "../../contract/address";
import { contractABI } from "../../contract/ABI";

// @import assets
import backImg from "../../assets/meta.png";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [selledCount, setSelledCount] = useState(0);
  const [count, setCount] = useState(0);
  const { web3, currentAcc } = useEthContext();
  const onMint = async () => {
    if (count > 6) {
      toast.error("Max Mint count is 6");
    } else if (count < 1) {
      toast.error("Please check count");
    } else {
      const contract = new web3.eth.Contract(contractABI, contract_address);
      await contract.methods
        .mintNFT(await web3.utils.toWei(count, "ether"))
        .send({
          from: currentAcc,
          value: await web3.utils.toWei(
            (count * 0.069).toFixed(3).toString(),
            "ether"
          ),
        })
        .on("receipt", function (receipt) {
          toast("Success!");
        })
        .on("error", function (error) {
          toast(error);
        });
    }
  };
  const setMintTime = async () => {
    const time = startTime.split(":");
    const sendTime = new Date(
      new Date(startDate).getFullYear(),
      new Date(startDate).getMonth() + 1,
      new Date(startDate).getDate(),
      Number(time[0]),
      Number(time[1]),
      Number(time[2])
    ).valueOf();
    console.log(sendTime);
    const contract = new web3.eth.Contract(contractABI, contract_address);
    await contract.methods
      .setMintTime(sendTime)
      .send({
        from: currentAcc,
        value: "0",
      })
      .then((res) => {
        toast("Success!");
      })
      .catch((err) => {
        toast(err);
      });
  };
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
  const onChangeCount = (num) => {
    setCount(num);
    if (num >= 1 && 6 >= num) {
      setCount(num);
    } else {
      setCount(num);
    }
  };

  return (
    <StyledHeader background={`url(${backImg})`}>
      <Text
        className="header-text"
        fontSize="35px"
        fontWeight="bold"
        fontFamily="Montserrat"
        margin="50px 0 0 0"
        align="center"
        maxWidth="950px"
        padding="0 20px"
        lineHeight="60px"
      >
        IN THE NEAR FUTURE, LORD ELON PRODUCED CLONES OF HIMSELF TO RULE WORLDS
        ACROSS THE METAVERSE AND BEYOND. THEY BECAME KNOWN AS HEROES OF
        EXTRATERRESTRIAL SOCIETIES
      </Text>

      <Col
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

            <Col align="center" margin="20px 0 0 0">
              <input
                id="appt-time"
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
                <Text fontFamily="Open Sans" fontWeight="bold">
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
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
          margin="10px 0 0 0"
        >
          Mint Price: 0.069 ETH
        </Text>
        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
        >
          Max Mint Per Wallet: 6
        </Text>
        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
        >
          Total Mint: {selledCount}/6969
        </Text>
        <Input
          type="number"
          placeholder="Enter mint count"
          padding="10px 10px"
          min="0"
          max="6"
          value={count}
          onChange={(e) => {
            onChangeCount(e.target.value);
          }}
        />

        <Text
          fontSize="25px"
          fontWeight="500"
          fontFamily="Aladin"
          align="center"
          maxWidth="1100px"
        >
          Total ETH: {(count * 0.069).toFixed(3)} ETH
        </Text>
        <Button
          variant="lightBlue"
          disabled={currentAcc ? false : true}
          onClick={() => {
            onMint();
          }}
        >
          <Text fontFamily="Open Sans" fontWeight="bold">
            Mint
          </Text>
        </Button>
      </Col>
      <Text fontSize="35px" fontWeight="Bold" margin="50px 0 30px 0">
        Minting soon
      </Text>
      <ToastContainer />
    </StyledHeader>
  );
};
export default Header;
