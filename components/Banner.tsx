import React from 'react'

export default function Banner() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/banner1.webp"
            className="d-block w-100"
            alt="Slide 1"
            height={300}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/banner2.webp"
            className="d-block w-100"
            alt="Slide 2"
            height={300}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/banner3.webp"
            className="d-block w-100"
            alt="Slide 3"
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/banner5.webp"
            className="d-block w-100"
            alt="Slide 4"
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/banner4.gif"
            className="d-block w-100"
            alt="Slide 4"
            height={300}
          />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

