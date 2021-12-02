import styled from "styled-components";

export const Progress = styled.div`
  position: absolute;
  right: 50%;
  background-color: #424443;
  transition: 0.3s ease-in-out;
  width: 5px;
  top: -15px;
  height: 100%;
  z-index: 3;
  @media screen and (max-width: 550px) {
    position: absolute;
    top: -15px;
    left: 20px;
  }
`;
