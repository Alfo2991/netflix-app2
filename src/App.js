import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Route, Routes, BrowserRouter,} from "react-router-dom";
import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import MyFooter from "./Components/MyFooter";
import MovieDetails from "./Components/MovieDetails";
import TVShows from "./Components/TvShows";
import OnlyMovies from "./Components/OnlyMovies";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<OnlyMovies/>}/>
        <Route path="/MovieGallery/harry-potter" element={<MovieGallery/>} />
        <Route path="/MovieGallery/lord-of-the-rings" element={<MovieGallery title="Lord of the Rings" />} />
        <Route path="/MovieGallery/guardians-of-the-galaxy" element={<MovieGallery title="Guardians of the Galaxy" />} />
        <Route path="/TvShows" element={<TVShows />} />
        <Route path="/MovieDetails/:movieId/" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
