import React from "react"

function blockPicker({ type, content }) {
  switch (type) {
    case "hero": {
      return <h1>Hero</h1>
    }
    case "why": {
      return <h1>Why</h1>
    }
    case "how": {
      return <h1>How</h1>
    }
    case "faq": {
      return <h1>FAQ</h1>
    }
    case "commitment": {
      return <h1>Commitment</h1>
    }
    default: {
      return null;
    }
  }
}

export function Blocks({blocks}) {
  return blocks.map(blockPicker);
}
