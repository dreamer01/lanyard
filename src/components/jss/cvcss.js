import { css } from "@emotion/core";
import swirl_bg  from "../../images/swirl_bg.svg"
import { WbVariables } from "./variables";


export const media = {
  mn: `@media only screen and (max-width: 360px)`,
  above_mn: `@media only screen and (min-width: 360px)`,
  xs: `@media only screen and (max-width: 470px)`,
  above_xs: `@media only screen and (min-width: 470px)`,
  sm: `@media only screen and (max-width: 768px)`,
  above_sm: `@media only screen and (min-width: 768px)`,
  md: `@media only screen and (max-width: 992px)`,
  above_md: `@media only screen and (min-width: 992px)`,
  lg: `@media only screen and (max-width: 1200px)`,
  above_lg: `@media only screen and (min-width: 1200px)`,
  xl: `@media only screen and (max-width: 1650px)`,
  above_xl: `@media only screen and (min-width: 1650px)`,
  smallPhone: `@media (min-width: 361px) and (max-width: 470px)`,
  medPhone: `@media (min-width: 471px) and (max-width: 768px)`,
  tab: `@media (min-width: 767px) and (max-width: 992px)`,
  lap: `@media (min-width: 991px) and (max-width: 1200px)`,
  hi_res: `@media (min-width: 1199px) and (max-width: 1650px)`,
}



export const hexToRgb = hex => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    : null;
};

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export const shadows = {
  theme_shadow: `0 4px 20px 0 ${rgba("#000", 0.14)}, 0 7px 10px -5px ${rgba(
    "#000",
    0.4
  )}`,

  blue_shadow: `0 4px 20px 0 ${rgba("#000", 0.14)},
          0 7px 10px -5px ${rgba(WbVariables.dark_base_color, 0.4)}`,

  red_shadow: `0 4px 20px 0 ${rgba("#000", 0.14)},
          0 7px 10px -5px ${rgba(WbVariables.wb_red, 0.4)}`,

  green_shadow: `0 4px 20px 0 ${rgba("#000", 0.14)},
          0 7px 10px -5px ${rgba(WbVariables.wb_green, 0.4)}`
};


export const clearfix = css`
  &:before {
    content: "";
    display: table;
  }
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`

export const close_icon = css`
  font-size: 0 !important;
  position: absolute;
  height: 40px;
  width: 40px;
  right: 10px;
  top: 10px;
  font-size: 0px;
  cursor: pointer;
  z-index: 9;
  border: 0;
  background: transparent;
  &:before,
  &:after {
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    height: 2px;
    background: white;
    width: 50%;
    transition: all 0.25s;
    opacity: 0;
    ${media.above_sm}{
      background: red;
    }
  }
  &:before {
    transform: rotate(45deg);
    opacity: 1;
  }
  &:after {
    transform: rotate(-45deg);
    opacity: 1;
  }
  &.solid{
    &:before,
    &:after {
      background: ${WbVariables.dark_base_color};
    }
  }
`

export const button_style = css`
  border: 0;
  line-height: 45px;
  height: 45px;
  padding: 0 15px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  background: ${WbVariables.dark_base_color};
  transition: all 0.25s ease;
  ${shadows.blue_shadow}
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
  ${shadows.theme_shadow}
    transform: translate(0);
    transition: none;
  }
  i,
  span {
    &:not(.material-icons) {
      display: block;
    }
  }
  &.small {
    line-height: normal;
    height: auto;
    padding: 5px;
    font-size: 12px;
    border-radius: 3px;
    font-weight: normal;
  }
  &.large {
    line-height: 45px;
    height: 45px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 25px;
  }
  &.plain {
    background: #fff;
    color: ${WbVariables.dark_base_color};
    border: solid 1px ${WbVariables.dark_base_color};
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
    &.white {
      color: #fff;
      background: transparent;
      border: solid 1px #fff;
    }
  }
  &.white {
    background: #fff;
    color: ${WbVariables.dark_base_color};
    border: solid 1px #fff;
  }
  &[disabled] {
    pointer-events: none;
    background: #eee !important;
    box-shadow: none;
    color: ${WbVariables.muted_color} !important;
    cursor: default;
  }
  &.icon-grp {
    display: flex;
    align-items: center;
    margin: auto;
    span,
    svg,
    i {
      font-size: 16px;
      margin-right: 10px;
    }
    &.right {
      span,
      svg,
      i {
        margin-left: 10px;
        margin-right: 0;
      }
    }
  }
  ${media.mn} {
    height: 40px;
    line-height: 40px;
  }
`


export const px_bg = css`
  color: ${WbVariables.dark_base_color};
  position: relative;
  overflow: hidden;
  >*{
    position: relative;
    z-index: 999;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(${swirl_bg});    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top -50px right;
    pointer-events: none;
  }

  &.inv {
    &:before {
      transform: rotateX(180deg);
    }
  }
`;

export const solid = css`
  color: ${WbVariables.dark_base_color};
`;

export const trig_pop = css`
  cursor: pointer;
`;

export const text_center = css`
  text-align: center;
`;

export const circles = css`
  margin-left: 15px;
  li {
    list-style-type: circle;
    line-height: 1.5;
    margin-bottom: 7px;
  }
`;

export const visible_xs = css`
  ${media.above_lg}  {
    display: none !important;
  }

  ${media.sm}{
    display: block !important;
  }
`;

export const hidden_xs = css`
   ${media.sm} {
    display: none !important;
  }
`;

export const hide = css`
  display: none !important;
`;

export const wb_alert = css`
  margin: 5px 0 0;
  font-size: 12px;
  padding: 5px 15px;
  line-height: 1.5;
  color: ${WbVariables.wb_orange};
  background: lighten(${WbVariables.wb_orange}, 30%);
  border: solid 1px lighten(${WbVariables.wb_orange}, 25%);
  display: block;
  width: 100%;
  border-radius: 7px;
  &.wb-success {
    color: ${WbVariables.wb_green};
    background: lighten(${WbVariables.wb_green}, 40%);
    border: solid 1px lighten(${WbVariables.wb_green}, 25%);
  }
  &.wb-error {
    color: ${WbVariables.wb_red};
    background: lighten(${WbVariables.wb_red}, 40%);
    border: solid 1px lighten(${WbVariables.wb_red}, 30%);
  }
  &.wb-info {
    color: ${WbVariables.wb_blue};
    background: lighten(${WbVariables.wb_blue}, 40%);
    border: solid 1px lighten(${WbVariables.wb_blue}, 25%);
  }
  &.wb-warning {
    color: ${WbVariables.wb_orange};
    background: lighten(${WbVariables.wb_orange}, 30%);
    border: solid 1px lighten(${WbVariables.wb_orange}, 25%);
  }
  &.lg {
    font-size: 18px;
  }
  &.md {
    font-size: 16px;
  }
  &.sm {
    font-size: 14px;
  }
  &.alert-tran {
    border: 0;
    background: transparent;
    padding: 0;
  }
  &.no-mar {
    margin: 0;
  }
  &.input-alert {
    max-width: 80%;
    margin: 10px auto 0;
    border-radius: 5px;
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: -5px;
      height: 7px;
      width: 7px;
      background: inherit;
      border-style: solid;
      border-color: inherit;
      border-width: 1px 1px 0 0;
      margin: auto;
      transform: rotate(-45deg);
    }
  }
`;

export const no_select = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const disabled = css`
  background: ${WbVariables.page_bg_color};
  pointer-events: none;
  color: ${WbVariables.muted_color};
  opacity: 0.5;
`;

export const tag = css`
  background: ${WbVariables.light_bg};
  display: inline-block;
  margin: 5px 10px;
  padding: 5px 10px;
  border-radius: 6px;
`;
export const info_card = css`
  .right {
    text-align: right;
  }
  &.top {
    position: relative;
    z-index: 9999;
  }
`;

export const timestamp = css`
  .dateFormat-wrap {
    margin-bottom: 5px;
    display: block;
    .dateFormat {
      display: block;
      span {
        margin-right: 3px;
        &.day {
          &:after {
            content: ",";
          }
        }
      }
    }
  }
  .time {
    white-space: nowrap;
  }
`;

export const stikcy_container = css`
  display: flex;
  flex-direction: column;
  &.affix {
    .stikcy_child {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 1200px;
      margin: auto;
    }
  }
  &.top {
    flex-direction: column-reverse;
    .stikcy_child {
      bottom: auto;
      top: 0;
    }
  }
`;

export const main_text = css`
  font-weight: bold;
  font-size: 50px;
  margin-top: ${WbVariables.gutter_width};
`;

export const white = css`
  color: #fff;
`;