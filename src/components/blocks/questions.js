import React from "react";
import { v4 as uuid } from "uuid";

function Question({ question, answer, open = false }) {
  return (
    <div className={`question ${open ? "open" : "closed"}`}>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

export function Questions({ title, questions }) {
  return (
    <section className="questions">
      <h2 className="questions__title">{title}</h2>
      {questions && questions.length && (
        <div className="questions__list">
          {questions.map(question => (
            <Question key={uuid()} {...question} />
          ))}
        </div>
      )}
    </section>
  );
}
