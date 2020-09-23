import React from "react"
import { v4 as uuid } from "uuid"
import { Hero } from "./hero"

function BlockPicker({ type, content }) {
  switch (type) {
    case "hero": {
      return <Hero {...content} />
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
  return blocks.map((block) => <BlockPicker key={uuid()} {...block} />);
}
