import React from "react";
import { Icon } from "./icons/icon"

export function NavItem({ item }){
  return (
    <li><a href={item.destination}><Icon name={item.icon} />{item.title}</a></li>
  )
}

