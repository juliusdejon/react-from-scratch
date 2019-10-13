import * as React from "react";

import "./sidebar.scss";

const Sidebar = props => (
  <nav className="sidebar">
    <ul>
      <li>
        <a>Add Employee</a>
      </li>
      <li>
        <a>Add Payroll</a>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
