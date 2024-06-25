import "./MovieCard.css";
import Star from "../../assets/star.png";

export default function MovieCard({ movie }) {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie Poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p className="align_center">
            {movie.vote_average}
            <img src={Star} alt="star emoji" className="card_emoji"></img>
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
}
