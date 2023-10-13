import "./Banner.css";
import requestAPI from "./requestAPI";
import { useState, useEffect } from "react";

function Banner() {
  const [titleMovie, setTitleMovie] = useState();
  const [descriptionMovie, setDescriptionMovie] = useState();
  const [backdropMovie, setBackdropMovie] = useState();

  // Hàm lấy dữ liệu bằng fetch API để cập nhật vào các state
  async function fetchAPI() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3" + requestAPI.fetchNetflixOriginals
      );
      const data = await response.json();
      if (data.success !== undefined && !data.success) {
        throw new Error(data.status_message);
      }
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      setTitleMovie(randomMovie.name || randomMovie.title);
      setDescriptionMovie(randomMovie.overview);
      setBackdropMovie(randomMovie.backdrop_path);
    } catch (err) {
      console.log(err.message);
    }
  }
  //Chạy hàm fetchAPI một lần mỗi khi Component được Mount
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="Banner-container">
      <img src={"https://image.tmdb.org/t/p/original" + backdropMovie} />
      <div className="Banner-content_movie">
        <h1>{titleMovie}</h1>
        <div className="Banner-button_movie">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{descriptionMovie}</p>
      </div>
    </div>
  );
}

export default Banner;
