import React, { useState } from "react";
import { Link } from "gatsby";

import { v4 as uuid } from "uuid";

import global from "../_data/global.yaml";
import { NavItem } from "../components/nav-item";
import Logo from "./icons/logo";

import "../scss/index.scss";
import useKeypress from "./utils/useKeypress";

export function Layout({ children, location, path }) {
  const [isNavOpen, setNavOpen] = useState(false);

  function handleNavToggle() {
    setNavOpen(!isNavOpen);
  }

  useKeypress("Escape", () => {
    setNavOpen(false);
  });

  return (
    <>
      <header
        aria-label="Site Header"
        className={`site-header ${isNavOpen ? "nav-open" : ""}`}
      >
        <div className="site-header__wrapper">
          <h1 className="site-logo">
            <Link to={"/"} className="site-logo__link">
              <Logo aria-label="Bins.co.uk" className="site-logo__image" />
            </Link>
          </h1>
          {global.nav && (
            <>
              <button className={`global-nav-button`} onClick={handleNavToggle}>
                {isNavOpen ? "Close" : "Open"} Navigation
              </button>
              <nav aria-label="Global Navigation" className="global-nav">
                <button
                  className="global-nav__close"
                  onClick={() => setNavOpen(false)}
                >
                  Close
                </button>
                <ul className="global-nav__items">
                  {global.nav.map(item => (
                    <NavItem key={uuid()} item={item} />
                  ))}
                </ul>
              </nav>
            </>
          )}
          {global.ctaButton &&
            global.ctaButton.title &&
            global.ctaButton.destination && (
              <a
                className="site-header__cta"
                href={global.ctaButton.destination}
              >
                {global.ctaButton.title}
              </a>
            )}
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer__wrapper">
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
        </div>
      </footer>
    </>
  );
}
