import * as React from "react";
import { Breadcrumb, Typography } from "antd";
import "./homepage.scss";

import { Search } from "./search/search";
import { Result } from "./result/result";

const { Title } = Typography;
const { useState } = React;

const HomePage: React.FC = () => {
  const [searchResult, setSearchResult] = useState(false);

  const toggleBreadcrumb = page => {
    if (page === "search") {
      setSearchResult(false);
    } else {
      setSearchResult(true);
    }
  };

  const search = word => {
    console.log(word);
    setSearchResult(true);
  };

  return (
    <article>
      <Title>Home</Title>
      <nav>
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => toggleBreadcrumb("search")}>
            Search
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => toggleBreadcrumb("result")}>
            Result
          </Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      {searchResult ? <Result /> : <Search search={search} />}
    </article>
  );
};
export { HomePage };
