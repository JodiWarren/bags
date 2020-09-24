import React from "react";
import { v4 as uuid } from "uuid";
import { Hero } from "./hero";
import { WhyBins } from "./why";
import { How } from "./how";
import { Questions } from "./questions";
import { Commitment } from "./commitment";

function BlockPicker({ type, content }) {
  switch (type) {
    case "hero": {
      return <Hero {...content} />;
    }
    case "why": {
      return <WhyBins {...content} />;
    }
    case "how": {
      return <How {...content} />;
    }
    case "questions": {
      return <Questions {...content} />;
    }
    case "commitment": {
      return <Commitment {...content} />;
    }
    default: {
      return null;
    }
  }
}

export function Blocks({ blocks }) {
  return blocks.map(block => <BlockPicker key={uuid()} {...block} />);
}
