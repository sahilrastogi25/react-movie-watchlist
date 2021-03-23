/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Movie } from "./components/Movie";
import { MovieHeading } from "./components/Movieheading";
import { Searchbox } from "./components/Searchbox";
import { Addtowatchlist } from "./components/Addtowatchlist";
import { Removefromwatchlist } from "./components/Removefromwatchlist";
import { Rating } from "./components/Rating";
const App = () => {
  const apikey = "2fb72820";
  const [movies, setMovies] = useState([]);
  const [mywatchLists, setMyWatchLists] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const getMovie = async (searchVal) => {
    const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchVal}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getMovie(searchVal);
    }, 500);
  }, [searchVal]);

  useEffect(() => {
    const movieWatchlist = JSON.parse(
      localStorage.getItem("react-movie-app-watchlist")
    );

    if (movieWatchlist) {
      setMyWatchLists(movieWatchlist);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-watchlist", JSON.stringify(items));
  };
  const addtheMovie = (movie) => {
    const newWatchlist = [...new Set([...mywatchLists, movie])];
    setMyWatchLists(newWatchlist);
    saveToLocalStorage(newWatchlist);
    alert(movie.Title + ": Added to your watchlist");
  };
  const removetheMovie = (movie) => {
    const newWatchlist = mywatchLists.filter(
      (mywatchList) => mywatchList.imdbID !== movie.imdbID
    );
    setMyWatchLists(newWatchlist);
    saveToLocalStorage(newWatchlist);
    alert(movie.Title + ": Removed from your watchlist");
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4">
        <i className="fas fa-ticket-alt fa-4x logo"></i>
        <MovieHeading
          heading="Movie Watchlist"
          subheading="Add a movie or a show to your watchlist Now!"
        />
        <Searchbox searchVal={searchVal} setSearchVal={setSearchVal} />
      </div>
      <div className="row">
        <Movie
          movies={movies}
          handleClick={addtheMovie}
          watchlist={Addtowatchlist}
          rating={Rating}
        />
      </div>
      <div className="row d-flex align-items-center mt-4">
        <MovieHeading subheading="Your Watchlist" />
      </div>
      <div className="row">
        <Movie
          movies={mywatchLists}
          handleClick={removetheMovie}
          watchlist={Removefromwatchlist}
          rating={Rating}
        />
      </div>
    </div>
  );
};
export default App;
