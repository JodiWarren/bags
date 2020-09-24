import React from "react";

import BannerImg from "../../assets/hero-banner.png";
import BadgeImg from "../../assets/free-bins-badge.png";

export function Hero({ strap, formInput, formButton }) {
  return (
    <section className="hero">
      <h2 className="hero__strap">{strap}</h2>
      <form className="where-form">
        <label htmlFor="where-form-input">{formInput}</label>
        <input type="text" id="where-form-input" name="where-form-input" />
        <button type="submit">{formButton}</button>
      </form>
      <div className="hero__banner" aria-hidden={true}>
        <img src={BannerImg} alt="" />
        <img src={BadgeImg} alt="" />
      </div>
    </section>
  );
}
