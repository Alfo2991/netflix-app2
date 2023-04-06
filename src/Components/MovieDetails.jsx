import React, { useState, useEffect } from "react";

function MovieDetails(props) {
const [movie, setMovie] = useState(null);
const [comments, setComments] = useState([]);
const movieId = props.match.params.movieId;

useEffect(() => {
const fetchMovie = async () => {
try {
    const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=ddb6f24&i=${movieId}`);
    if (!movieResponse.ok) {
throw new Error("Failed to fetch movie details");
}
const movieObj = await movieResponse.json();
setMovie(movieObj);
} catch (error) {
console.error(error);
}
};
const fetchComments = async () => {
    try {
      const commentsResponse = await fetch(`http://www.omdbapi.com/?apikey=ddb6f24&i/comments/${movieId}`);
      if (!commentsResponse.ok) {
        throw new Error("Failed to fetch comments");
      }
      const commentsArray = await commentsResponse.json();
      setComments(commentsArray);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchMovie();
  fetchComments();
  
  }, [movieId]);
  
  if (!movie) {
  return <div>Loading movie details...</div>;
  }
  
  return (
  <div>
  <h1>{movie.Title}</h1>
  <p>{movie.Plot}</p>
  <p>Released: {movie.Released}</p>
  <p>Runtime: {movie.Runtime}</p>
  <p>Genre: {movie.Genre}</p>
  <p>Director: {movie.Director}</p>
  <p>Writer: {movie.Writer}</p>
  <p>Actors: {movie.Actors}</p>
  <p>Awards: {movie.Awards}</p>
  <p>IMDB Rating: {movie.imdbRating}</p>
  <h2>Comments</h2>
  {comments.map((comment) => (
    <div key={comment.id}>
      <p>{comment.text}</p>
      <p>Author: {comment.author}</p>
    </div>
  ))}
</div>

);
}

export default MovieDetails;