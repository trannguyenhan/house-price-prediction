import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Navigation from "./route/Navigation";

function App() {
  return (
    <Router>
    <Navigation />
  </Router>
  );
}

export default App;