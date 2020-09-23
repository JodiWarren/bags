import React from "react"
import { Link } from "gatsby";
import { v4 as uuid } from "uuid"

function LinkCard({ image, title, content, linkText, linkDestination }) {
  return (
    <Link className="linkcard" to={linkDestination}>
      <img src={image} alt=""/>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{linkText}</p>
    </Link>
  )
}

export function WhyBins({ title, items }) {
  return (
    <section className="whybins">
      <h2 className="whybins__title">{title}</h2>
      {items.map(item => <LinkCard key={uuid()} {...item} />)}
    </section>
  )
}
