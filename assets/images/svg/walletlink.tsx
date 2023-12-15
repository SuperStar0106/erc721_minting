import React from "react";
import { IconProps } from "@/app/types/components/Icon";

const Walletlink: React.FC<IconProps> = ({
  iSize = { x: 22, y: 24 },
  iColor = "black",
}) => {
  return (
    <svg
      width="73"
      height="73"
      viewBox="0 0 73 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_710_37)">
        <path
          d="M24.4902 8.94043H48.4902V32.9404H24.4902V8.94043Z"
          fill="url(#paint0_linear_710_37)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.1431 20.9472C28.1431 25.5609 31.8833 29.3011 36.497 29.3011C41.1108 29.3011 44.8509 25.5609 44.8509 20.9472C44.8509 16.3335 41.1108 12.5933 36.497 12.5933C31.8833 12.5933 28.1431 16.3335 28.1431 20.9472ZM34.3621 18.2554C34.0545 18.2554 33.8052 18.5047 33.8052 18.8123V23.0821C33.8052 23.3897 34.0545 23.639 34.3621 23.639H38.6319C38.9395 23.639 39.1888 23.3897 39.1888 23.0821V18.8123C39.1888 18.5047 38.9395 18.2554 38.6319 18.2554H34.3621Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_710_37"
          x="0.490234"
          y="0.94043"
          width="72"
          height="72"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_710_37"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_710_37"
            result="effect2_dropShadow_710_37"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_710_37"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_710_37"
          x1="36.4902"
          y1="8.94043"
          x2="36.4902"
          y2="32.9404"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2E66F8" />
          <stop offset="1" stop-color="#124ADB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Walletlink;
