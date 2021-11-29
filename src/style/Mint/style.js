import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: ${(props) => props.backgroundImage};
`;
