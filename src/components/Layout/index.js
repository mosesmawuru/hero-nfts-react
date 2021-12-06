import styled from "styled-components";
import isEmpty from "../../utils/isEmpty";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  position: ${(props) => props.position || "0"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop || "0"};
  border-bottom: ${(props) => props.borderBottom || "0"};
  border-bottom-color: ${(props) => props.borderBottomColor || "0"};
  border-style: ${(props) => props.borderStyle || "0"};
  border-width: ${(props) => props.borderWidth || "0"};
  background-image: ${(props) => props.backgroundImage};
  background: ${(props) => props.background || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-size: ${(props) => props.backgroundSize};
  border-radius: ${(props) => props.borderRadius || 0};
  border-color: ${(props) => props.borderColor || "transparent"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  overflow: ${(props) => props.overflow || "unset"};
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity || 1};
  cursor: ${(props) => props.cursor || "unset"};
  backdrop-filter: ${(props) => props.backdropFilter || "none"};

  & > *:not(:last-child) {
    margin: ${(props) => props.mgap};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  position: ${(props) => props.position || "0"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  z-index: ${(props) => props.zIndex};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop || "0"};
  border-bottom: ${(props) => props.borderBottom || "0"};
  border-bottom-color: ${(props) => props.borderBottomColor || "0"};
  border-style: ${(props) => props.borderStyle || "0"};
  border-width: ${(props) => props.borderWidth || "0"};
  background: ${(props) => props.background || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-size: ${(props) => props.backgroundSize};
  border-radius: ${(props) => props.borderRadius || 0};
  border-color: ${(props) => props.borderColor || "transparent"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  overflow: ${(props) => props.overflow || "unset"};
  opacity: ${(props) => props.opacity || 1};
  cursor: ${(props) => props.cursor || "unset"};
  backdrop-filter: ${(props) => props.backdropFilter || "none"};

  & > *:not(:last-child) {
    margin: ${(props) => props.mgap};
  }
`;
export const Grid = styled.div`
  display: grid;
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  position: ${(props) => props.position || "0"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  z-index: ${(props) => props.zIndex};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop || "0"};
  border-bottom: ${(props) => props.borderBottom || "0"};
  border-bottom-color: ${(props) => props.borderBottomColor || "0"};
  border-style: ${(props) => props.borderStyle || "0"};
  border-width: ${(props) => props.borderWidth || "0"};
  background: ${(props) => props.background || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-size: ${(props) => props.backgroundSize};
  border-radius: ${(props) => props.borderRadius || 0};
  border-color: ${(props) => props.borderColor || "transparent"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  overflow: ${(props) => props.overflow || "unset"};
  opacity: ${(props) => props.opacity || 1};
  cursor: ${(props) => props.cursor || "unset"};
  backdrop-filter: ${(props) => props.backdropFilter || "none"};
  grid-template: ${(props) =>
    props.grid &&
    `repeat(${props.grid.row ? props.grid.row : "1"}, 1fr) / repeat(${
      props.grid.col ? props.grid.col : "1"
    }, 1fr)`} !important;
  ${({ responsive, flexDirection, display, gap }) =>
    responsive && getResponsive(responsive, flexDirection, display, gap)};

  gap: ${(props) => props.gap || "0px"};
`;
// export const Grid = styled.div`
//   display: flex;
//   width: ${(props) => props.width || "auto"};
//   max-width: ${(props) => props.maxWidth || "auto"};
//   min-width: ${(props) => props.minWidth || "auto"};
//   height: ${(props) => props.height || "auto"};
//   max-height: ${(props) => props.maxHeight || "auto"};
//   min-height: ${(props) => props.minHeight || "auto"};
//   position: ${(props) => props.position || "0"};
//   top: ${(props) => props.top || "auto"};
//   bottom: ${(props) => props.bottom || "auto"};
//   left: ${(props) => props.left || "auto"};
//   right: ${(props) => props.right || "auto"};
//   justify-content: ${(props) => props.justify || "center"};
//   align-items: ${(props) => props.align || "center"};
//   z-index: ${(props) => props.zIndex};
//   padding: ${(props) => props.padding || "0"};
//   margin: ${(props) => props.margin || "0"};
//   border: ${(props) => props.border};
//   border-top: ${(props) => props.borderTop || "0"};
//   border-bottom: ${(props) => props.borderBottom || "0"};
//   border-bottom-color: ${(props) => props.borderBottomColor || "0"};
//   border-style: ${(props) => props.borderStyle || "0"};
//   border-width: ${(props) => props.borderWidth || "0"};
//   background: ${(props) => props.background || "none"};
//   background-color: ${(props) => props.backgroundColor || "transparent"};
//   background-position: ${(props) => props.backgroundPosition};
//   background-repeat: ${(props) => props.backgroundRepeat};
//   background-size: ${(props) => props.backgroundSize};
//   border-radius: ${(props) => props.borderRadius || 0};
//   border-color: ${(props) => props.borderColor || "transparent"};
//   flex-wrap: ${(props) => props.wrap || "nowrap"};
//   overflow: ${(props) => props.overflow || "unset"};
//   opacity: ${(props) => props.opacity || 1};
//   cursor: ${(props) => props.cursor || "unset"};
//   backdrop-filter: ${(props) => props.backdropFilter || "none"};
//   ${({ flexDirection, gap, display }) => {
//     return getGap(flexDirection, gap, display);
//   }};
//   ${({ responsive, flexDirection, display, gap }) =>
//     responsive && getResponsive(responsive, flexDirection, display, gap)};

//   & > *:not(:last-child) {
//     margin: ${(props) => props.mgap};
//   }
// `;
// // func getter for responsive
const getResponsive = (responsive, flexDirection, display, gap) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  let lastDirection = flexDirection;
  let lastDisplay = display;
  let lastGap = gap;
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    if (!isEmpty(item.flexDirection)) {
      lastDirection = item.flexDirection;
    }
    if (!isEmpty(item.display)) {
      lastDisplay = item.display;
    }
    if (!isEmpty(item.gap)) {
      lastGap = item.gap;
    }
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.display ? `display: ${item.display};` : `display:${lastDisplay};`}
      ${item.flexWrap ? `flex-wrap: ${item.wrap};` : ""}
      ${
        item.flexDirection
          ? `flex-direction: ${item.direction};`
          : `flex-direction:${lastDirection};`
      }
      ${item.justifyContent ? `justify-content: ${item.justify};` : ""}
      ${item.alignItems ? `align-items: ${item.align};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.templateCol ? `grid-template-columns: ${item.templateCol};` : ""}
      ${item.templateRow ? `grid-template-rows: ${item.templateRow};` : ""}
      ${item.zIndex ? `z-index: ${item.zIndex};` : ""}
      ${item.mWidth ? `max-width: ${item.mWidth}px;` : ""}
      ${
        item.rWidth
          ? `width: ${
              typeof item.rWidth === "number" ? item.rWidth + "px" : item.rWidth
            };`
          : ""
      }

      ${
        item.gap
          ? `
          & > *:not(:last-child) {
            margin-right: 0px;
            margin-bottom: 0px;
          }
          & > *:not(:first-child) {
            margin-right: 0px;
            margin-bottom: 0px;
          }
          `
          : ""
      }
      ${
        item.gap === 0
          ? "gap:0px;"
          : getGap(lastDirection, lastGap, lastDisplay)
      }
    }`;
  });
  return resStyle;
};
// func getter for gap
const getGap = (flexDirection, gap, display) => {
  if (display === "grid") {
    return `
     gap: ${gap}px;
    `;
  } else if (flexDirection === "column") {
    return `
      height: 100%;
      & > *:not(:last-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "column-reverse") {
    return `
      height: 100%;
      & > *:not(:first-child) {
         margin-right: 0px;
         margin-bottom: ${gap}px;
      }
    `;
  } else if (flexDirection === "row") {
    return `
      & > *:not(:last-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  } else if (flexDirection === "row-reverse") {
    return `
      & > *:not(:first-child) {
         margin-bottom: 0px;
         margin-right: ${gap}px;
      }
    `;
  }
};
