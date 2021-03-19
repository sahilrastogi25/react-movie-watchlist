export const Movielist = (props) => {
  const Watchlist = props.watchlist;
  const Rating = props.rating;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="poster-container"
          key={movie.imdbID}
          onClick={() => props.handleClick(movie)}
        >
          <img src={movie.Poster} alt="movie" />
          <Rating movie={movie} />
          <Watchlist />
        </div>
      ))}
    </>
  );
};
