import React from "react";

function SvgComponent(props) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="#4C4A6F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.2 21a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM4.8 21a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm5.4 0a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm0-3.6V4.64C10.2 3.733 9.68 3 9.045 3H3m5.4 16.2H6.6M21 12.6h-2.513a1.629 1.629 0 01-1.687-1.56V7.2M3 14.4h7.2m-6-2.4V5.454M7.2 12V5.454"
      />
      <path
        stroke="#4C4A6F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 19.2h1.8A1.2 1.2 0 0021 18v-7.2a3.6 3.6 0 00-3.6-3.6h-4.2v9.6m0-9.6v-3c2.132-.105 3.404 1.088 4.2 3"
      />
    </svg>
  );
}

export default SvgComponent;
