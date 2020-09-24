import React from "react";

import CarouselMockup from '../../assets/carousel-mockup.png';

export function How({title, items}) {
  return (
    <section className="how-carousel">
      <h2 className="how-carousel__title">{title}</h2>
      <img src={CarouselMockup} alt=""/>
      {items && items.length > 1 &&
        <div className="how-carousel__steps">
          {items.map((item, index) => <button>Step {index + 1}</button>)}
        </div>
      }
      {items && items.length &&
      <div className="how-carousel__items">
        {items.map((item, index) => (
            <div className="how-carousel__item">
              <p>{item.title}</p>
              <p>{item.content}</p>
            </div>
        ))}
      </div>
      }
      {items && items.length > 1 &&
        <button>Next</button>
      }
    </section>
  )
}
