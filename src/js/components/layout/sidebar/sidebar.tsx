import * as React from "react";

import "./sidebar.scss";

const Sidebar: React.SFC = () => (
  <aside className="sidebar">
    <ul>
      <li>
        <a>Add Employee</a>
      </li>
      <li>
        <a>Add Payroll</a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
