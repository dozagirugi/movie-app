import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <MovieList type="popular" title="인기 작품" emoji={Fire} />
      <MovieList type="top_rated" title="최고 평점" emoji={Star} />
      <MovieList type="upcoming" title="예정 작품" emoji={Party} />
    </div>
  );
}
