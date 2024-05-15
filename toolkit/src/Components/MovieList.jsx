import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovieCard , setPage, fetchMovies} from "../Slices/searchSlice";
import { MovieCard } from "./MovieCard";
export const MovieList = () => {

  const dispatch = useDispatch()
  const List = useSelector(state => state.search.lists)
  const searchInputs = useSelector((state) => state.search.searchInputs)
  const loading = useSelector(state => state.search.fetch.loading)

  const list = List.moviesList.map(movie => {
    return (
      <div key={movie.imdbID} className="movie-search-card">
        <MovieCard movie = {movie} />
      </div>
    );
  })

  useEffect(() => {
    dispatch(clearMovieCard())
  }, [])

  const getMovies = async (page) => {
    dispatch(setPage(page))
    const params = {
      title: searchInputs.title,
      year: searchInputs.year,
      page: page
    }
    dispatch(fetchMovies(params))
  }

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <span class="loader"></span>
        </div>
      ) : (
        <div className="search-result_container">
          {!List.errorLoading ? (
            <>
              {list}
              {List.moviesList.length != List.total &&
                List.moviesList.length > 0 && (
                  <button
                    type="button"
                    onClick={() => getMovies(Number(searchInputs.page) + 1)}
                  >
                    Показать ещё
                  </button>
                )}
            </>
          ) : (
            <div className="movieNotFound">Movie not found!</div>
          )}
        </div>
      )}
    </>
  );
}
