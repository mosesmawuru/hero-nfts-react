import styled from "styled-components";

export const Image = styled.img`
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius || 0};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  object-fit: ${(props) => props.objectFit};
`;
