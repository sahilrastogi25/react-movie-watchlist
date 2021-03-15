export const Movielist = ({ movies }) => {
  return (
    <div className="row">
      {movies ? (
        movies.map((movie, index) => (
          <div className="poster-container">
            <img src={movie.Poster} key={index} alt="moviePoster" />
          </div>
        ))
      ) : (
        <div className="empty-message">
          <i className="fas fa-surprise fa-4x"></i>
          <h3>Wow so empty!</h3>
        </div>
      )}
    </div>
  );
};
