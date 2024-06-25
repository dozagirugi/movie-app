import "./MovieCard.css";
import Star from "../../assets/star.png";

export default function MovieCard() {
  return (
    <a className="movie_card">
      <img
        src="https://search1.kakaocdn.net/thumb/C232x324.fwebp.q100/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5d47796c4b1c298723b25786ef9dc4f62fa0fed9"
        alt="Movie Poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">콰이어트 플레이스</h3>
        <div className="align_center movie_date_rate">
          <p>2024.06.26</p>
          <p className="align_center">
            평점
            <img src={Star} alt="star emoji" className="card_emoji"></img>
          </p>
        </div>
        <p className="movie_description">
          쉿, 살고 싶다면 절대 소리내지 말 것! 평균 소음 90 데시벨을 자랑하는
          미국 최대도시 뉴욕, 고양이 ‘프로도’와 함께 간만에 외출을 나온
          ‘사미라’는 공연을 보고 돌아가던 중 하늘에서 떨어져 내리는 섬광을
          목격하고 곧 사람들을 닥치는 대로 공격하는 정체불명 괴생명체의 출현에
          충격에 휩싸인다.
        </p>
      </div>
    </a>
  );
}
