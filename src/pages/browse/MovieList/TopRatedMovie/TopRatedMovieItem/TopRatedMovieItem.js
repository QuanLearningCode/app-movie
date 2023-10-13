import MovieDetails from "../../MovieDetails/MovieDetails";
import { useState, useEffect } from "react";

function TopRatedMovieItem(prop) {
  const [isImgClick, setIsImgClick] = useState(false);

  //Hàm xử lý sự kiện click vào hình ảnh thì sẽ cập nhật vào state để tuỳ thuộc vào giá trị false/true của state mà sẽ ẩn/hiện nội dung thông tin cụ thể của movie
  //Ngoài ra, mỗi khi click thì id của hình ảnh được click sẽ truyền ngược lại vào hàm imgClicked của Component cha trực tiếp, Component cha nhận được id của hình ảnh được click thì sẽ truyền về các movie khác để so sánh, những movie có hình ảnh không được click, nghĩa là id của movie được click không trùng với các id của các movie đó thì sẽ cập nhật trạng thái imgclicked là false để ẩn nội dung thông tin của movie.
  const clickHandler = () => {
    setIsImgClick(!isImgClick);
    prop.imgClicked(prop.id);
  };

  //Hook này sẽ được gọi khi id của hình ảnh được click truyền từ Component cha trực tiếp, thay đổi
  useEffect(() => {
    if (prop.imgIdClicked === prop.id) {
      setIsImgClick(true);
    } else {
      setIsImgClick(false);
    }
  }, [prop.imgIdClicked]);

  return (
    <div>
      <img
        src={prop.backdrop}
        onClick={clickHandler}
        className="MovieItem-img"
      />
      <div>
        {isImgClick && (
          <MovieDetails
            title={prop.title}
            overview={prop.overview}
            release_date={prop.release_date}
            vote={prop.vote}
            className={!isImgClick ? "hidden" : "show"}
            id={prop.id}
          />
        )}
      </div>
    </div>
  );
}

export default TopRatedMovieItem;
