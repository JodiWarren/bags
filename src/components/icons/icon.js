import React from "react";

import Truck from './truck';
import Bin from './bin';
import RecyclingIcon from './recycling-icon';
import Headphones from './headphones';

export function Icon({name, atts}) {
  switch (name) {
    case 'truck': {
      return (<Truck {...atts} />)
    }
    case 'bin': {
      return (<Bin {...atts} />)
    }
    case 'recycling-icon': {
      return (<RecyclingIcon {...atts} />)
    }
    case 'headphones': {
      return (<Headphones {...atts} />)
    }
    default: {
      return null;
    }
  }
}
