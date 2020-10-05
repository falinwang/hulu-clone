import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import SearchBox from "./components/search-box/SearchBox";
import Results from "./components/results/Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />

      <SearchBox
        placeholder={`i.e. Spider-Man`}
        setSelectedOption={setSelectedOption}
      />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
