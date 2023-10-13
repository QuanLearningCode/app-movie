import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Banner from "./Banner/Banner.js";
import MovieList from "./MovieList/MovieList.js";

function Browse() {
  return (
    <div>
      <Navbar />
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;
