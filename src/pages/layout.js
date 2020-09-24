import React from "react";
import { Link } from "gatsby";

import { v4 as uuid } from "uuid";

import global from "../_data/global.yaml";
import { NavItem } from "../components/nav-item";

export function Layout({ children, location, path }) {
  return (
    <>
      <header>
        {path === "/" && (
          <h1>
            <Link to={"/"}>
              <img src="logo.svg" alt="Bins.co.uk" />
            </Link>
          </h1>
        )}

        {path !== "/" && ( // TODO: Dry this up
          <h2>
            <Link to={"/"}>
              <img src="logo.svg" alt="Bins.co.uk" />
            </Link>
          </h2>
        )}
        {global.nav && (
          <nav>
            <ul>
              {global.nav.map(item => (
                <NavItem key={uuid()} item={item} />
              ))}
            </ul>
          </nav>
        )}
        {global.ctaButton &&
          global.ctaButton.title &&
          global.ctaButton.destination && (
            <a href={global.ctaButton.destination}>{global.ctaButton.title}</a>
          )}
      </header>
      <main>{children}</main>
      <footer>
        <h2>
          <Link to={"/"}>
            <img src="logo.svg" alt="Bins.co.uk" />
          </Link>
        </h2>
        <nav aria-label="Secondary links">
          {global.footer.nav &&
            global.footer.nav.map(item => (
              <Link key={uuid()} to={item.destination}>
                {item.title}
              </Link>
            ))}
        </nav>
        <div>
          {global.footer.social &&
            global.footer.social.map(item => {
              return (
                <a key={uuid()} href={item.destination}>
                  <img src={item.icon} alt={item.title} />
                </a>
              );
            })}
        </div>
      </footer>
    </>
  );
}
