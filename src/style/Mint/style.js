import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  background-image: ${(props) => props.backgroundImage};

  .date-selector {
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    border: none;
    margin-right: 20px;
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
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const HeroGrid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 850px) {
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template: repeat(4, 1fr) / repeat(1, 1fr);
  }
`;
export const StyledOverview = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 0 0;
  padding: 0 40px;
  align-items: flex-start;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }

  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;
