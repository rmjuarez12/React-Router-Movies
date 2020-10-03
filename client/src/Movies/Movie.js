import React, { useState, useEffect } from "react";

// Import Components
import MovieCard from "./MovieCard";

// Import Dependencies
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const [isSaved, setIsSaved] = useState(false);

  const { saved } = props;

  // Get the parameters passed by React Router
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then((response) => {
        // Study this response with a breakpoint or log statements
        console.log("Single Movie", response);

        setIsSaved(false);

        // Check if this movie was saved before. If so, set the isSaved to true
        if (saved.length > 0) {
          saved.forEach((item) => {
            if (item.id === response.data.id) {
              setIsSaved(true);
            }
          });
        }

        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id, saved]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = (evt) => {
    if (isSaved) {
      props.removeFromSavedList(movie.id);
    } else {
      props.addToSavedList(movie.id);
    }

    setIsSaved(!isSaved);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <button className="save-button" onClick={saveMovie}>
        {isSaved ? "Remove from Saved" : "Add to Saved"}
      </button>
    </div>
  );
}
