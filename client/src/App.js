import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import SavedList from "./Movies/SavedList";

// Import Dependencies
import { Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          console.log("All movies", response.data);

          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    const getMovieObject = movieList.filter((item) => item.id === id)[0];

    const savedList = [...saved, getMovieObject];

    setSaved(savedList);
  };

  const removeFromSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    const savedList = saved.filter((item) => item.id !== id);

    console.log(savedList);

    setSaved(savedList);
  };

  return (
    <div>
      <SavedList list={saved} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route exact path="/movies/:id">
        <Movie addToSavedList={addToSavedList} saved={saved} removeFromSavedList={removeFromSavedList} />
      </Route>
    </div>
  );
}
