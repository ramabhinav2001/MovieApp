import "../css/MovieCard.css";
function MovieCard({ movie }) {
    const onFavClick = () => {
        alert(`You liked ${movie.title}`);
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.posterUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavClick}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">Title: {movie.title}</h3>
                <p className="movie-genre">Genre:{movie.genre}</p>
                <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
            </div>
        </div>
    );
}
export default MovieCard;