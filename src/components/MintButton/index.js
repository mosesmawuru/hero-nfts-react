import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
const MintView = styled.div`
  width: 300px;
  height: 60px;
  position: relative;
  margin: 30px 0;
`;
const StyledButton = styled.div`
  width: 300px;
  height: 120px;
  position: absolute;
`;
const StyledView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 300px;
  height: 100px;
  background-color: ${theme.bgLightBlue};
  outline: none;
  transition: 1s ease-in-out;
  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  :hover {
    transition: 1s ease-in-out;
    background: ${theme.bgLightBlueHover};
  }
  :hover svg {
    stroke-dashoffset: -480;
  }
`;
export const MintButton = ({ children }) => {
  return (
    <MintView>
      <StyledButton>
        <StyledView>
          <svg
            width="300px"
            height="100px"
            viewBox="0 0 180 60"
            className="border"
          >
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="bg-line"
            />
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="hl-line"
            />
          </svg>
          {children}
        </StyledView>
      </StyledButton>
    </MintView>
  );
};
