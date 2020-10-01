import React from "react";

// Import Components
import MovieCard from "./MovieCard";

// Import Dependencies
import { Link } from "react-router-dom";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id } = props.movie;

  return (
    <Link to={`/movies/${id}`} className="movie-card-link">
      <MovieCard movie={props.movie} />
    </Link>
  );
}
