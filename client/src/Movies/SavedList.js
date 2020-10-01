import React from "react";

// Import Dependencies
import { Link, NavLink } from "react-router-dom";

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>

      <nav className="saved-movies">
        {props.list.map((movie, index) => (
          <NavLink to={`/movies/${movie.id}`} key={index} className="saved-movies">
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
