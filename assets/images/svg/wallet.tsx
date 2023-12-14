import React from "react";
import { IconProps } from "@/app/types/components/Icon";

const Wallet: React.FC<IconProps> = ({
  iSize = { x: 22, y: 24 },
  iColor = "black",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
    >
      <path
        d="M23.3339 3.87708H5.83386C3.9042 3.87708 2.33386 5.44741 2.33386 7.37708V21.3771C2.33386 23.3067 3.9042 24.8771 5.83386 24.8771H23.3339C24.6207 24.8771 25.6672 23.8306 25.6672 22.5437V6.21041C25.6672 4.92358 24.6207 3.87708 23.3339 3.87708ZM5.83386 22.5437C5.18986 22.5437 4.6672 22.0199 4.6672 21.3771V7.37708C4.6672 6.73424 5.18986 6.21041 5.83386 6.21041H23.3339V9.71041H16.3339C15.047 9.71041 14.0005 10.7569 14.0005 12.0437V16.7104C14.0005 17.9972 15.047 19.0437 16.3339 19.0437H23.335V22.5437H5.83386ZM23.3339 12.0437V16.7104H16.3339V12.0437H23.3339Z"
        fill="white"
      />
    </svg>
  );
};

export default Wallet;
