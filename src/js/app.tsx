import * as React from "react";

import "./app.scss";

import HomePage from "./HomePage/homepage";
import Navbar from "./components/layout/navbar/navbar";
import Sidebar from "./components/layout/sidebar/sidebar";

const { useState } = React;

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleHamburgerButtonClick = () => {
    toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
  };
  return (
    <div className="app">
      <Navbar handleHamburgerButtonClick={handleHamburgerButtonClick} />
      {toggleSidebar && <Sidebar />}
      <HomePage />
    </div>
  );
}

export default App;
