import DocumentaryItem from "./DocumentaryItem/DocumentaryItem";
import { useState } from "react";
import requestAPI from "../../Banner/requestAPI";
import useFetchMovie from "../../Hooks/useFetch";

function Documentary() {
  const documentaryList = useFetchMovie(requestAPI.fetchDocumentaries);
  const [imgIdClicked, setImgIdClicked] = useState(0);

  //Hàm này dùng để nhận id của hình ảnh có sự kiện click được kích hoạt và cập nhật lại vào state imgIdClicked (là trạng thái xác định id của hình ảnh được click)
  const imgClicked = (id) => {
    setImgIdClicked(id);
  };

  return (
    <div>
      <h3 className="Category">Tài liệu</h3>
      <div className="MovieList-container scroll">
        {documentaryList.map((cur) => {
          return (
            <DocumentaryItem
              key={cur.id}
              backdrop={cur.backdrop}
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
  );
}

export default Documentary;
