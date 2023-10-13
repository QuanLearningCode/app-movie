import "./SearchForm.css";
import ResultList from "../ResultList/ResultList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

function SearchForm() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [inputTouch, setInputTouch] = useState(false);
  const [imgIdClicked, setImgIdClicked] = useState(0);
  const searchInput = useRef();

  const API_KEY = "1858e92119ed0e59741d3bd0d98fd700";

  //Hàm này để lấy dữ liệu API theo từ khoá search của người dùng, trả về dữ liệu và cập nhật trạng thái danh sách Movie có kết quả.
  async function fetchSearchMovie(input, API_KEY) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      if (data.success !== undefined && !data.success) {
        throw new Error(data.status_message);
      }
      const collectSearchMovie = data.results.map((cur) => {
        return {
          id: cur.id,
          title: cur.title,
          overview: cur.overview,
          poster: "https://image.tmdb.org/t/p/original" + cur.poster_path,
          backdrop: "https://image.tmdb.org/t/p/original" + cur.backdrop_path,
          release_date: cur.release_date,
          vote: cur.vote_average,
        };
      });
      setSearchMovie(collectSearchMovie);
    } catch (err) {
      console.log(err.message);
    }
  }

  //Hàm này dùng để nhận id của hình ảnh có sự kiện click được kích hoạt và cập nhật lại vào state imgIdClicked (là trạng thái xác định id của hình ảnh được click)
  const imgClicked = (id) => {
    setImgIdClicked(id);
  };

  //Hàm xử lý sự kiện click nút search thì sẽ gọi hàm lấy dữ liệu API. Ngoài ra thiết lập trạng thái người dùng đã click vào input là true
  //Nếu người dùng đã click thì tuỳ vào input nhận về sẽ xử lý lấy dữ liệu API, nếu dữ liệu API trả về không có gì thì hiện text: Movies not found
  const searchButtonClickHandler = () => {
    fetchSearchMovie(searchInput.current.value, API_KEY);
    setInputTouch(true);
  };

  //Hàm này xử lý sự kiện click vào nút reset thì sẽ làm trống input và focus vào input.
  const resetButtonClickHandler = () => {
    searchInput.current.value = "";
    searchInput.current.focus();
  };

  return (
    <div className="Search-container">
      <div className="SearchForm-container">
        <input type="text" ref={searchInput} />
        <FontAwesomeIcon
          icon="fa-magnifying-glass"
          className="SearchForm-icon"
          onClick={searchButtonClickHandler}
        />
        <div className="SearchForm-button_container">
          <button
            className="SearchForm-button_reset"
            onClick={resetButtonClickHandler}
          >
            RESET
          </button>
          <button
            className="SearchForm-button_search"
            onClick={searchButtonClickHandler}
          >
            SEARCH
          </button>
        </div>
      </div>
      {searchMovie.length !== 0 && (
        <div>
          <h2 className="ResultList-title">Search Result</h2>
          <div className="ResultList-container">
            {searchMovie.map((cur) => {
              return (
                <ResultList
                  key={cur.id}
                  poster={cur.poster}
                  title={cur.title}
                  overview={cur.overview}
                  release_date={cur.release_date}
                  vote={cur.vote}
                  id={cur.id}
                  imgClicked={imgClicked}
                  imgIdClicked={imgIdClicked}
                />
              );
            })}
          </div>
        </div>
      )}
      {searchMovie.length === 0 && inputTouch ? (
        <p className="ResultList-zero">Movies not found!</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchForm;
library.add(fas);
