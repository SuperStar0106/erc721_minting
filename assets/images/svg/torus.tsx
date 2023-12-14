import React from "react";
import { IconProps } from "@/app/types/components/Icon";

const Torus: React.FC<IconProps> = ({
  iSize = { x: 22, y: 24 },
  iColor = "black",
}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.490234"
        y="0.94043"
        width="24"
        height="24"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></pattern>
        <image id="image0_0_1380" width="400" height="400" />
      </defs>
    </svg>
  );
};

export default Torus;
