import * as React from "react";
import { Input } from "antd";

interface SearchProps {
  search: (word: string) => void;
}

const Search: React.FC<SearchProps> = props => {
  return (
    <section>
      <Input.Search
        placeholder="input search text"
        enterButton="Search"
        onSearch={word => props.search(word)}
      />
    </section>
  );
};

export { Search };
