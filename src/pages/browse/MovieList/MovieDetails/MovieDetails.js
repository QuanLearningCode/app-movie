import "./MovieDetails.css";
import { useState, useEffect } from "react";

function MovieDetails(prop) {
  const [movieVideo, setMovieVideo] = useState([]);

  async function fetchMovieVideo(movieId) {
    const API_KEY = "1858e92119ed0e59741d3bd0d98fd700";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    if (data.results) {
      const collectMovieVideo = data.results.map((cur) => {
        return {
          name: cur.name || cur.title,
          key: cur.key,
          site: cur.site,
          size: cur.size,
          type: cur.type,
          official: cur.official,
          id: cur.id,
        };
      });
      setMovieVideo(collectMovieVideo);
    }
  }

  useEffect(() => {
    fetchMovieVideo(prop.id);
  }, []);

  return (
    <div className={prop.className}>
      <div className="MovieDetails-content">
        <h4 className="MovieTitle">{prop.title}</h4>
        <div className="MovieInfor">
          {"Release Date: " + prop.release_date} <br />
          {"Vote: " + prop.vote + " / 10"}
        </div>
        <p className="MovieOverview">{prop.overview}</p>
      </div>
      <div>
        {movieVideo.length !== 0 ? (
          <iframe
            width="650"
            height="400"
            src={"https://www.youtube.com/embed/" + movieVideo[0].key}
          ></iframe>
        ) : (
          <img src={prop.backdrop} className="MovieDetails-img" />
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
