import React, { useState, useEffect } from "react";

// Import Components
import MovieCard from "./MovieCard";

// Import Dependencies
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Movie(props) {
  const [movie, setMovie] = useState();

  // Get the parameters passed by React Router
  const { id } = useParams();

  // let id = 1;
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then((response) => {
        // Study this response with a breakpoint or log statements
        console.log("Single Movie", response);

        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
}
