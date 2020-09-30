import React from "react";
import ReactDOM from "react-dom";

// Import Dependencies
import { BrowserRouter as Router } from "react-router-dom";

// Import Assets
import "./index.css";
import App from "./App";

// You'll need to wrap <App /> for routing to work
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
