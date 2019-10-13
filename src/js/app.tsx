import * as React from "react";

import "./app.scss";

import { HomePage } from "./homepage/homepage";
import Navbar from "./components/layout/navbar/navbar";
import Sidebar from "./components/layout/sidebar/sidebar";

const { useState } = React;

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleHamburgerButtonClick = () => {
    toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
  };

  const mainStyle = toggleSidebar ? { marginLeft: "200px" } : {};

  return (
    <div className="app">
      <Navbar handleHamburgerButtonClick={handleHamburgerButtonClick} />
      {toggleSidebar && <Sidebar />}
      <main style={mainStyle}>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
