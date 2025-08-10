import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css"; // Assuming you have some styles in App.css


function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
      rating: 9
    },
    {
      title: "Interstellar",
      description: "A journey to save mankind through space travel.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      rating: 8
    }
  ]);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  // Optional: Monitor changes
  useEffect(() => {
    console.log("Movie list updated:", movies);
  }, [movies]);

  const addMovie = () => {
    const title = prompt("Enter movie title:");
    const description = prompt("Enter description:");
    const posterURL = prompt("Enter poster URL:");
    const rate = Number(prompt("Enter rating (0-10):"));

    if (title && description && posterURL && rate >= 0) {
      setMovies([...movies, { title, description, posterURL, rating: rate }]);
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rating
  );

  return (
    <div className="App">
      <h1>🎬 My Favorite Movies</h1>
      <Filter setSearch={setSearch} setRating={setRating} />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );

  
}

export default App;
