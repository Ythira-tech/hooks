import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function MovieDetails({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetails;
