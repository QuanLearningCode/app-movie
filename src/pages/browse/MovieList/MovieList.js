import "./MovieList.css";
import ActionMovie from "./ActionMovie/ActionMovie";
import ComedyMovie from "./ComedyMovie/ComedyMovie";
import Documentary from "./Documentary/Documentary";
import HorrorMovie from "./HorrorMovie/HorrorMovie";
import OriginalMovie from "./OriginalMovie/OriginalMovie";
import RomanceMovie from "./RomanceMovie/RomanceMovie";
import TopRatedMovie from "./TopRatedMovie/TopRatedMovie";
import TrendingMovie from "./TrendingMovie/TrendingMovie";

function MovieList() {
  return (
    <div>
      <OriginalMovie />
      <TrendingMovie />
      <TopRatedMovie />
      <ActionMovie />
      <ComedyMovie />
      <HorrorMovie />
      <RomanceMovie />
      <Documentary />
    </div>
  );
}

export default MovieList;
