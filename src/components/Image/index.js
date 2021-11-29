import styled from "styled-components";

export const Image = styled.img`
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  border-radius: ${(props) => props.borderRadius || 0};
`;
