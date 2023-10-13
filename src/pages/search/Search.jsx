import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import Navbar from "../browse/Navbar/Navbar";

const Search = () => {
  return (
    <div className="app">
      <Navbar />
      <SearchForm />
    </div>
  );
};

export default Search;
