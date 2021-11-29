import React from "react";
import styled, { keyframes } from "styled-components";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";
import { theme } from "../../theme";

export const StyledButton = styled.button(
  (props) =>
    css({
      px: "20px",
      py: "0",
      fontSize: ["base"],
      fontWeight: "bold",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      width: props.width,
    }),
  {
    zIndex: 20,
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "center",
    textDecoration: "none",
    fontFamily: "inherit",
    lineHeight: "1",
    height: "40px",
    borderRadius: "40px",

    "&:focus": {
      outline: "none",
    },
    "&:active": { transform: "scale(0.95)" },
  },
  variant({
    variants: {
      blue: {
        color: theme.textBlue,
        bg: theme.bgBlue,
        border: "none",
        "&:hover": { bg: theme.bgBlueHover },
      },
      lightBlue: {
        color: theme.colorWhite,
        bg: theme.bgLightBlue,
        border: "none",
        "&:hover": { bg: theme.bgLightBlueHover },
      },
      white: {
        color: "black",
        bg: "white",
        border: "none",
        "&:hover": { bg: theme.colorWhite },
      },
      transparent: {
        color: theme.colorWhite,
        bg: theme.transparent,
        border: `1px solid ${theme.transparentBorder}`,
        "&:hover": {
          borderColor: theme.transparentBorderHover,
        },
      },
      outlinedGray: {
        color: "gray.750",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.750",
        "&:hover": {
          borderColor: "orange.regular",
          color: "orange.regular",
        },
      },
      lightOrange: {
        color: theme.colorWhite,
        bg: theme.bgOrange,
        border: theme.bgOrange,
        "&:hover": { bg: theme.bgOrangeHover },
      },
      lightRed: {
        color: theme.colorWhite,
        bg: theme.bgLightRed,
        border: theme.bgLightRed,
        "&:hover": { bg: theme.bgLightRedHover },
      },
      royalBlue: {
        color: theme.colorWhite,
        bg: theme.bgRoyalBlue,
        border: theme.bgRoyalBlue,
        "&:hover": { bg: theme.bgRoyalBlueHover },
      },
      orchid: {
        color: theme.colorWhite,
        bg: theme.bgOrchid,
        border: theme.bgOrchid,
        "&:hover": { bg: theme.bgOrchidHover },
      },
      yellow: {
        color: theme.colorWhite,
        bg: theme.bgYellow,
        border: theme.bgYellow,
        "&:hover": { bg: theme.bgYellowHover },
      },
      lime: {
        color: theme.colorWhite,
        bg: theme.bgLime,
        border: theme.bgLime,
        "&:hover": { bg: theme.bgLimeHover },
      },
      blueViolet: {
        color: theme.colorWhite,
        bg: theme.bgBlueViolet,
        border: theme.bgBlueViolet,
        "&:hover": { bg: theme.bgBlueVioletHover },
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      medium: {
        height: "48px",
        borderRadius: "48px",
        fontSize: 16,
        px: 21,
        py: 21,
      },
      small: {
        height: "40px",
        borderRadius: "40px",
        fontSize: 14,
        px: 26,
        py: 12,
      },
    },
  }),
  compose(border, space, layout)
);
const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid ${theme.bgPrimary};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Button = ({
  children,
  disabled = false,
  loading = false,
  width = "auto",
  ...props
}) => (
  <StyledButton {...props} disabled={disabled} width={width}>
    {children}
    {loading && <Spinner />}
  </StyledButton>
);
