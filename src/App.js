import React from "react";
import RoutesComponent from "./Routes";
import { Link } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Link to="/login">login</Link> 
      <Link to="/register">register</Link>
      <RoutesComponent />
    </div>
  );
};

export default App;
