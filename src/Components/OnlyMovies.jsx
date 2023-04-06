import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieGallery from "./Components/MovieGallery";

function OnlyMovies() {
  return (
    <>
      <main className="container-fluid px-5 text-bg-dark">
        <MovieGallery title="harry potter" />
        <MovieGallery title="Lord of the Rings" />
        <MovieGallery title="Guardians of the Galaxy" />
      </main>
    </>
  );
}
export default OnlyMovies;
