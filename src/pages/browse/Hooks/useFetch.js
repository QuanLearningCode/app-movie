import { useState, useEffect } from "react";

//Hook dùng để lấy dữ liệu theo từng thể loại movie, dữ liệu lấy về được cập nhật vào state và trả về state đó
function useFetchMovie(endpoint) {
  const [movieList, setMovieList] = useState([]);

  async function fetchMovie(endpoint) {
    try {
      const response = await fetch("https://api.themoviedb.org/3" + endpoint);
      const data = await response.json();
      if (data.success !== undefined && !data.success) {
        throw new Error(data.status_message);
      }
      const collectMovie = data.results.map((cur) => {
        return {
          id: cur.id,
          title: cur.title || cur.name,
          overview: cur.overview,
          vote: cur.vote_average,
          release_date: cur.release_date || cur.first_air_date,
          poster: "https://image.tmdb.org/t/p/original" + cur.poster_path,
          backdrop: "https://image.tmdb.org/t/p/original" + cur.backdrop_path,
        };
      });
      setMovieList(collectMovie);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchMovie(endpoint);
  }, []);

  return movieList;
}

export default useFetchMovie;
