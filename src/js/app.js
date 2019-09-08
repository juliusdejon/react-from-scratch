import React from "react";

import HomePage from "./HomePage/homepage";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
