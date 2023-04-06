import React from "react";
import SingleMovie from "./SingleMovie";

class MovieGallery extends React.Component {
  state = {
    movies: [],
    title: "",
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?apikey=ddb6f24";
    try {
      const response = await fetch(`${apiLink}&s=${this.props.title.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const moviesObj = await response.json();
      this.setState({ movies: moviesObj.Search, title: moviesObj.Title, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { movies, title, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <>
        <SingleMovie title={title} movies={movies} />
      </>
    );
  }
}

export default MovieGallery;
