/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Movielist } from "./components/Movielist";
import { MovielistHeading } from "./components/Movielistheading";
import { Searchbox } from "./components/Searchbox";
export const App = () => {
  const apikey = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4">
        <MovielistHeading heading="Movie Watchlist" />
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <Movielist movies={movies} />
      </div>
    </div>
  );
};
