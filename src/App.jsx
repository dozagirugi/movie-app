import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <MovieList />
    </div>
  );
}
