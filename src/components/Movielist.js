export const Movielist = ({ movies }) => {
  return (
    <div className="row">
      {movies &&
        movies.map((movie, index) => (
          <div className="poster-container">
            <img src={movie.Poster} key={index} alt="moviePoster" />
          </div>
        ))}
    </div>
  );
};
