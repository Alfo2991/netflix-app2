import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import MyFooter from "./Components/MyFooter";
import MovieDetails from "./Components/MovieDetails";
import TVShows from "./Components/TvShows";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/MovieGallery" element={<MovieGallery title="Harry Potter" />} />
        <Route path="/MovieGallery" element={<MovieGallery title="Lord of the Rings" />} />
        <Route path="/MovieGallery" element={<MovieGallery title="Guardians of the Galaxy" />} />
        <Route path="/TvShows" element={<TVShows />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
      <MovieGallery />
      <MyFooter />
    </Router>
  );
}

export default App;
