export const Movielist = (props) => {
  const Watchlist = props.watchlist;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="poster-container"
          key={movie.imdbID}
          onClick={() => props.handleClick(movie)}
        >
          <img src={movie.Poster} alt="movie" />
          <Watchlist />
        </div>
      ))}
    </>
  );
};
