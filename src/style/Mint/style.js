import styled from "styled-components";
import { theme } from "../../theme";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.background || "none"};
  background-size: 100% 100%;
  width: 100%;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1000px) {
    background-size: cover;

    .header-text {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 670px) {
    .header-text {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 500px) {
    .header-text {
      font-size: 20px;
    }
  }
  .date-selector {
    padding: 10px;

    border-radius: 10px;
    width: 200px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
  }
  .react-datepicker-wrapper {
    width: auto;
  }
  .react-datepicker-popper {
    z-index: 3;
  }
  .react-datepicker-ignore-onclickoutside {
    padding: 10px;
    outline: none;
    font-weight: bold;
  }
  .appt-time {
    width: 220px;
    border: none;
    outline: none;
    padding: 8px 0;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
  .rc-time-picker-input {
    font-weight: bold;

    height: 38px;
  }
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const HeroGrid = styled.div`
  transition: 0.3s ease-in-out;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 20px;
  margin-left: 30px;
  @media screen and (max-width: 850px) {
    margin-left: 0px;
    margin-top: 30px;
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    gap: 10px;
    img {
      width: 130px;
      height: 170px;
    }
  }
  @media screen and (max-width: 320px) {
    gap: 10px;
    img {
      width: 115px;
      height: 150px;
    }
  }
`;
export const OverviewSection = styled.div`
  width: 100%;
  @media screen and (max-width: 850px) {
    .overview_header {
      font-size: 30px;
      text-align: center;
      padding: 0 10px;
    }
    .describe_header {
      width: 100%;
      font-size: 23px;
      text-align: center;
    }
  }
`;
export const StyledOverview = styled.div`
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  margin: 20px 0 0 0;
  padding: 0 40px;
  align-items: flex-start;
  @media screen and (max-width: 850px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    .overview {
      align-items: center;
      text-align: center;
    }
  }
`;
export const AnimationView = styled.div`
  transition: 0.3s ease-in-out;
  padding: 10px;
  position: relative;
  max-width: 800px;
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 550px) {
    padding: 10px 10px 10px 50px;
    .reverse {
      flex-direction: column-reverse;
      text-align: right;
    }
  }
`;
export const StyledMap = styled.div`
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  position: relative;
  .first {
    text-align: right;
  }
  @media screen and (min-width: 550px) {
    & > *:not(:last-child) {
      margin-right: 10%;
    }
  }
  @media screen and (max-width: 550px) {
    span {
      width: 100%;
      max-width: 100%;
    }
    .first {
      text-align: left;
      width: 100%;
      max-width: 100%;
    }
    .second {
      width: 100%;
      max-width: 100%;
    }
    flex-direction: column;
  }
`;
export const Dot = styled.div`
  transform: scale(${(props) => (props.scaleSize ? props.scaleSize : 0.2)});
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 0px 15px ${theme.bgOrange};
  position: absolute;
  left: 48.6%;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 850px) {
    left: 48.3%;
  }
  @media screen and (max-width: 550px) {
    left: -37px;
  }
`;
