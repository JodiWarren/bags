import React from "react";
import { v4 as uuid } from 'uuid';

import global from "../_data/global.yaml"
import { NavItem } from "../components/nav-item"

export function Layout({children}) {
  return (
    <>
    <header>
      {global.nav &&
        <nav>
          <ul>
            {global.nav.map(item => <NavItem key={uuid()} item={item} />)}
          </ul>
        </nav>
      }
      {global.ctaButton && global.ctaButton.title && global.ctaButton.destination &&
        <a href={global.ctaButton.destination}>{global.ctaButton.title}</a>
      }
    </header>
    <main>
    </main>
    <footer>

    </footer>
    </>
  )
}
