import React from "react";
import { Link } from "gatsby";

export function Commitment({ title, text, buttonText, buttonDestination }) {
  return (
    <section className="commitment">
      <h2 className="commitment__title">{title}</h2>
      <p className="commitment__content">{text}</p>
      <Link to={buttonDestination} className="commitment__cta">
        {buttonText}
      </Link>
    </section>
  );
}
