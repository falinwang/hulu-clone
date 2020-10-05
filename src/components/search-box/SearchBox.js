import React, { useState } from "react";
import "./SearchBox.css";
import requests from "../../requests";

function SearchBox({ placeholder, setSelectedOption }) {
  const [query, setQuery] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSelectedOption(requests.searchMovies + query);
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        className="input"
        type="search"
        name="query"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default SearchBox;
