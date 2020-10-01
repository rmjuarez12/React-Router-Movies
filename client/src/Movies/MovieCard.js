import React from "react";

// Import Dependencies
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";

export default function MovieCard(props) {
  const { title, director, metascore, stars } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

      <Route path="/movies/:id">
        <h3>Actors</h3>

        {stars !== undefined &&
          stars.map((star) => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
      </Route>
    </div>
  );
}
