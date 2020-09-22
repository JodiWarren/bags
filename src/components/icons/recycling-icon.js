import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M13.758 6.9l-2.85-5.012a2.25 2.25 0 00-3.9 0l-.793 1.373M8.957 15.075h5.668a2.251 2.251 0 001.95-3.375l-.975-1.688M4.196 6.636l-2.85 5.062a2.25 2.25 0 001.95 3.375h2.289"
        stroke="#4C4A6F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.207 12.823l-2.25 2.25 2.25 2.25M14.582 3.823l-.824 3.074-3.073-.824M1.122 7.46l3.074-.824.823 3.073"
        stroke="#4C4A6F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
