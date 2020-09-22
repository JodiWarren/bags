import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M4 14.8h-.6A2.4 2.4 0 011 12.4V10a2.4 2.4 0 012.4-2.4H4a.6.6 0 01.6.6v6a.6.6 0 01-.6.6zM16.6 14.8H16a.6.6 0 01-.6-.6v-6a.6.6 0 01.6-.6h.6A2.4 2.4 0 0119 10v2.4a2.4 2.4 0 01-2.4 2.4zM3.4 7.6A6.6 6.6 0 0110 1v0a6.6 6.6 0 016.6 6.6M12.4 17.8h1.8a2.4 2.4 0 002.4-2.4v-.6"
        stroke="#4C4A6F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 19H10a1.2 1.2 0 010-2.4h1.2a1.2 1.2 0 110 2.4z"
        stroke="#4C4A6F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
