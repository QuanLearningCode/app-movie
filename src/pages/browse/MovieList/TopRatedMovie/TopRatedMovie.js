import requestAPI from "../../Banner/requestAPI";
import { useState } from "react";
import TopRatedMovieItem from "./TopRatedMovieItem/TopRatedMovieItem";
import useFetchMovie from "../../Hooks/useFetch";

function TopRatedMovie() {
  const topRatedMovieList = useFetchMovie(requestAPI.fetchTopRated);
  const [imgIdClicked, setImgIdClicked] = useState(0);

  //Hàm này dùng để nhận id của hình ảnh có sự kiện click được kích hoạt và cập nhật lại vào state imgIdClicked (là trạng thái xác định id của hình ảnh được click)
  const imgClicked = (id) => {
    setImgIdClicked(id);
  };

  return (
    <div>
      <h3 className="Category">Xếp hạng cao</h3>
      <div className="MovieList-container scroll">
        {topRatedMovieList.map((cur) => (
          <TopRatedMovieItem
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
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovie;
