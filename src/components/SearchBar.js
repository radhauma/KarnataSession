import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <section className="search-container">
      <input
        type="text"
        id="search-bar"
        placeholder="Search for jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id="search-btn" onClick={() => onSearch(query)}>Search</button>
    </section>
  );
};

export default SearchBar;
