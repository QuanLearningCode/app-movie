import TrendingMovieItem from "./TrendingMovieItem/TrendingMovieItem";
import { useState } from "react";
import requestAPI from "../../Banner/requestAPI";
import useFetchMovie from "../../Hooks/useFetch";

function TrendingMovie() {
  const trendingMovieList = useFetchMovie(requestAPI.fetchTrending);
  const [imgIdClicked, setImgIdClicked] = useState(0);

  //Hàm này dùng để nhận id của hình ảnh có sự kiện click được kích hoạt và cập nhật lại vào state imgIdClicked (là trạng thái xác định id của hình ảnh được click)
  const imgClicked = (id) => {
    setImgIdClicked(id);
  };

  return (
    <div>
      <h3 className="Category">Xu hướng</h3>
      <div className="MovieList-container scroll">
        {trendingMovieList.map((cur) => {
          return (
            <TrendingMovieItem
              key={cur.id}
              backdrop={cur.backdrop}
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
  );
}

export default TrendingMovie;
