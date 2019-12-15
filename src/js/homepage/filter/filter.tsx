import * as React from "react";

import { Checkbox } from "antd";
interface FilterProps {}

const Filter: React.FC<FilterProps> = props => {
  return (
    <section>
      <Checkbox onChange={() => {}}>Prepaid</Checkbox>
      <Checkbox onChange={() => {}}>Postpaid</Checkbox>
    </section>
  );
};

export { Filter };
