import { useEffect } from "react"
import { useSelector } from "react-redux"
import { MovieCard } from "./MovieCard"
import { NavLink } from "react-router-dom"

export const FavoriteMovies = () => {

    const favoriteMovies = useSelector(state => state.search.lists.favoriteMovies)

    const favoriteList = favoriteMovies.map(movie => {
        return (
          <div key={movie.imdbID} className="movie-search-card">
            <MovieCard movie={movie} />
          </div>
        );
    })

    useEffect(() => {

    }, [])
  return (
    <div>
      <NavLink to={"/"}>
        <button type="button">Назад</button>
      </NavLink>
      <div className="favorite-container">
        <div className="favorite-lable">Избранное</div>
        <div className="search-result_container">{favoriteList}</div>
      </div>
    </div>
  );
}
