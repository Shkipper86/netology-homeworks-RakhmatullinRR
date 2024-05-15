import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, NavLink } from "react-router-dom"
import { getMovieDescription } from "../Slices/searchSlice"

export const Movie = () => {
    
    const dispatch = useDispatch()
    const movie = useSelector(state => state.search.movieCard)
    const loading = useSelector(state => state.search.fetch.loading)
    const location = useLocation()

    useEffect(() => {
        const id = location.pathname.replace('/', '')
        dispatch(getMovieDescription(id))
    }, [])

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <span class="loader"></span>
        </div>
      ) : (
        <>
          <NavLink to={"/"}>
            <button type="button">Назад</button>
          </NavLink>
          <div className="movie-card-container">
            <img src={movie.Poster} alt="" />
            <div className="movie-description">
              <div className="movie-description-title">
                {movie.Title} ({movie.Year})
                <span
                  style={
                    Number(movie.imdbRating) > 6.9
                      ? { color: "green" }
                      : { color: "#777" }
                  }
                >
                  {movie.imdbRating}
                </span>
              </div>
              <div className="movie-genre">
                <b>Жанр:</b> {movie.Genre}
              </div>
              <div className="movie-runtime">
                <b>Продолжительность:</b> {movie.Runtime}
              </div>
              <div className="movie-director">
                <b>Режиссёр:</b> {movie.Director}
              </div>
              <div className="movie-actors">
                <b>Актёры:</b> {movie.Actors}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
