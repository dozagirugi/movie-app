import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          인기순 <img src={Fire} alt="Fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="novie_filter_iterm active"> 8+ Star </li>
            <li className="novie_filter_iterm"> 7+ Star </li>
            <li className="novie_filter_iterm"> 6+ Star </li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">정렬 기준</option>
            <option value="">개봉일 순</option>
            <option value="">평점 순</option>
          </select>

          <select name="" id="" className="movie_sorting">
            <option value="">오름차순</option>
            <option value="">내림차순</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        <MovieCard />
      </div>
    </section>
  );
}
