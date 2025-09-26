import MovieCard from "../components/MovieCard.jsx";
import { useState } from "react";
import '../css/Home.css';
function Home(){
    const movies = [{id: 1, title: "Inception", genre: "Sci-Fi", releaseDate: "2010-07-16", posterUrl: "https://example.com/inception.jpg"},
    {id: 2, title: "The Dark Knight", genre: "Action", releaseDate: "2008-07-18", posterUrl: "https://example.com/dark_knight.jpg"},
    {id: 3, title: "Interstellar", genre: "Sci-Fi", releaseDate: "2014-11-07", posterUrl: "https://example.com/interstellar.jpg"},
    {id: 4, title: "Parasite", genre: "Thriller", releaseDate: "2019-05-30", posterUrl: "https://example.com/parasite.jpg"},
    {id: 5, title: "The Godfather", genre: "Crime", releaseDate: "1972-03-24", posterUrl: "https://example.com/godfather.jpg"},];

    const [searchQ, setSearchQ] = useState("");
    const handleSearch = (event) => {
        event.preventDefault();
        console.log("Searching for:", searchQ);
    };

    return (<div className="home">
        <form className="search-form" onSubmit={handleSearch}>
            <input type="text" placeholder="Search movies..." 
            className="search-input" 
            value={searchQ} 
            onChange={(e) => setSearchQ(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <h1>Movie List</h1>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>);
}

export default Home;