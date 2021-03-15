import { useEffect, useState } from "react";
import { Movielist } from "./components/Movielist";
import { MovielistHeading } from "./components/Movielistheading";
export const App = () => {
  const apikey = process.env.API_KEY;
  const [movies, setMovies] = useState([]);
  const [seachValue, setSearchValue] = useState("");
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovielistHeading heading="Movie Watchlist" />
      </div>
      <div className="row">{{ movies } && <Movielist movies={movies} />}</div>
    </div>
  );
};
