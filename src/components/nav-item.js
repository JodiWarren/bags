import React from "react";
import { Icon } from "./icons/icon";

export function NavItem({ item }) {
  return (
    <li className="global-nav__item">
      <a className="global-nav__link" href={item.destination}>
        <Icon name={item.icon} />
        {item.title}
      </a>
    </li>
  );
}
