import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleMovie = ({ title, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }

  return (
    <div className="movie-carousel ">
      <h2>{title}</h2>
      <Slider {...settings} >
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-carousel-item ">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SingleMovie;