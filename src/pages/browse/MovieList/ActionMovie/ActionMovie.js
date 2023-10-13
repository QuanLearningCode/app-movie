import ActionMovieItem from "./ActionMovieItem/ActionMovieItem";
import { useState } from "react";
import requestAPI from "../../Banner/requestAPI";
import useFetchMovie from "../../Hooks/useFetch";

function ActionMovie() {
  const actionMovieList = useFetchMovie(requestAPI.fetchActionMovies);
  const [imgIdClicked, setImgIdClicked] = useState(0);

  //Hàm này dùng để nhận id của hình ảnh có sự kiện click được kích hoạt và cập nhật lại vào state imgIdClicked (là trạng thái xác định id của hình ảnh được click)
  const imgClicked = (id) => {
    setImgIdClicked(id);
  };

  return (
    <div>
      <h3 className="Category">Hành động</h3>
      <div className="MovieList-container scroll">
        {actionMovieList.map((cur) => {
          return (
            <ActionMovieItem
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

export default ActionMovie;
