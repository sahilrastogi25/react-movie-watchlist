export const Movie = ({
  rating: Rating,
  movies,
  watchlist: Watchlist,
  handleClick,
}) => {
  return (
    <>
      {movies.map((movie) => (
        <div
          className="poster-container"
          key={movie.imdbID}
          onClick={() => handleClick(movie)}
        >
          <img src={movie.Poster} alt="moviePoster" />
          <Rating movie={movie} />
          <Watchlist />
        </div>
      ))}
    </>
  );
};
