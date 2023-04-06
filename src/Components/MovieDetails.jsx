import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleMovie from "./SingleMovie";

function MovieDetails() {
  const { movieId } = useParams();
  const apiLink = "http://www.omdbapi.com/?apikey=ddb6f24";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`${apiLink}&i=${movieId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const movieObj = await response.json();
        setMovie(movieObj);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return <SingleMovie movie={movie} />;
}

export default MovieDetails;