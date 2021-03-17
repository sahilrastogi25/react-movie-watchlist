/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Movielist } from "./components/Movielist";
import { MovielistHeading } from "./components/Movielistheading";
import { Searchbox } from "./components/Searchbox";
import { Addtowatchlist } from "./components/Addtowatchlist";
import { Removefromwatchlist } from "./components/Removefromwatchlist";
const App = () => {
  const apikey = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [mywatchLists, setMyWatchLists] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  const addtheMovie = (movie) => {
    const newWatchlist = [...new Set([...mywatchLists, movie])];
    setMyWatchLists(newWatchlist);
    alert(movie.Title + ": Added to your watchlist");
  };
  const removetheMovie = (movie) => {
    const newWatchList = mywatchLists.filter(
      (mywatchList) => mywatchList.imdbID !== movie.imdbID
    );
    setMyWatchLists(newWatchList);
    alert(movie.Title + ": Removed from your watchlist");
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4">
        <MovielistHeading
          heading="Movie Watchlist"
          subheading="Add a movie or a show to your watchlist Now!"
        />
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <Movielist
          movies={movies}
          handleClick={addtheMovie}
          watchlist={Addtowatchlist}
        />
      </div>
      <div className="row d-flex align-items-center mt-4">
        <MovielistHeading heading="Your Watchlist" />
      </div>
      <div className="row">
        <Movielist
          movies={mywatchLists}
          handleClick={removetheMovie}
          watchlist={Removefromwatchlist}
        />
      </div>
    </div>
  );
};
export default App;
