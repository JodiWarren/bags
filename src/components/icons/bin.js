import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.775 20.75a1.775 1.775 0 100-3.55 1.775 1.775 0 000 3.55z"
        stroke="#4C4A6F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.447 19.567l6.02 1.183 3.55-14.2H6.183v10.751M15.65 3H7.367a1.183 1.183 0 00-1.184 1.183V6.55H19.2A3.55 3.55 0 0015.65 3v0z"
        stroke="#4C4A6F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
