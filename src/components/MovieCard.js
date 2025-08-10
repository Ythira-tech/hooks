import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} width="200" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
      <Link to={`/movie/${movie.title}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
