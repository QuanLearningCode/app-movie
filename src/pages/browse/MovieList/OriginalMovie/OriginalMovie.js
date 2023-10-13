import requestAPI from "../../Banner/requestAPI";
import OriginalMovieItem from "./OriginalMovieItem/OriginalMovieItem";
import { useState } from "react";
import useFetchMovie from "../../Hooks/useFetch";

function OriginalMovie() {
  const originalMovieList = useFetchMovie(requestAPI.fetchNetflixOriginals);
  const [imgIdClicked, setImgIdClicked] = useState(0);

  //Hàm này dùng để nhận id của hình ảnh có sự kiện click được kích hoạt và cập nhật lại vào state imgIdClicked (là trạng thái xác định id của hình ảnh được click)
  const imgClicked = (id) => {
    setImgIdClicked(id);
  };

  return (
    <div className="MovieList-container scroll">
      {originalMovieList.map((cur) => {
        return (
          <OriginalMovieItem
            key={cur.id}
            poster={cur.poster}
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
  );
}

export default OriginalMovie;
