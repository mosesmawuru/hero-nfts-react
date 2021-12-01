import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1000px) {
    .img-background {
      background-size: cover;
    }
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
    width: 100px;
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
  .time-selector {
    margin-top: 20px;
    width: 120px;
    border: none;
    outline: none;
  }
  .rc-time-picker-input {
    font-weight: bold;
    font-size: 1rem;
    height: 38px;
  }
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const HeroGrid = styled.div`
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
`;
export const StyledOverview = styled.div`
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
