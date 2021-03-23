import { useState } from "react";
export const Rating = ({ movie }) => {
  const [imdb, setImdb] = useState("");
  const apikey = "2fb72820";
  const getImdbRating = async (movie) => {
    const title = movie.Title;
    const url = `https://www.omdbapi.com/?apikey=${apikey}&t=${title}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.imdbRating) {
      setImdb(responseJson.imdbRating);
    }
  };
  setTimeout(() => {
    getImdbRating(movie);
  }, 500);
  return (
    <div className="row d-flex justify-content-center">
      <i className="fab fa-imdb fa-2x"></i>
      <p id="imdb">{imdb}</p>
    </div>
  );
};
