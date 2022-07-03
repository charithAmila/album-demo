import * as React from "react";
import { SVGProps } from "react";

interface LikeButtonSvgInterface extends SVGProps<SVGSVGElement> {
  liked: boolean;
}

const LikeButtonSvg = (props: LikeButtonSvgInterface) => (
  <svg
    width={40}
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 122.88"
    {...props}
  >
    <title>{"like-button"}</title>
    <path
      d="M61.44 0A61.44 61.44 0 1 1 0 61.44 61.44 61.44 0 0 1 61.44 0Z"
      style={{
        fillRule: "evenodd",
        fill: props.liked ? "#f30655" : "#d5d1d1",
      }}
    />
    <path
      d="M32.5 53.39h10.56a2.18 2.18 0 0 1 2.17 2.18v28.95a2.19 2.19 0 0 1-2.17 2.18H32.5a2.19 2.19 0 0 1-2.18-2.18V55.57a2.19 2.19 0 0 1 2.18-2.18Zm27.7-21.71c1.14-5.82 10.66-.46 11.29 8.91a40.41 40.41 0 0 1-.81 9.93h13.61c5.65.23 10.59 4.28 7.1 10.93.8 2.9.92 6.3-1.24 7.65.27 4.57-1 7.41-3.37 9.65A11.42 11.42 0 0 1 85 84.63c-1.83 2.58-3.31 2-6.19 2h-23c-3.64 0-5.62-1-8-4V57c6.91-1.83 10.55-11.2 12.39-17.35v-8Z"
      style={{
        fill: "#fff",
        fillRule: "evenodd",
      }}
    />
  </svg>
);

export default LikeButtonSvg;
