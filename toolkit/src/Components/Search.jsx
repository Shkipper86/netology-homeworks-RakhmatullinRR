import { useDispatch, useSelector } from "react-redux";
import {changeInputTitle, changeInputYear, fetchMovies, clearMoviesList} from '../Slices/searchSlice'
import { MovieList } from "./MovieList";
import { NavLink } from "react-router-dom"

export const Search = () => {

  const dispatch = useDispatch()

  const searchInputs = useSelector((state) => state.search.searchInputs)

  const yearChhangeHandler = (value) => {
    console.log(/^[1-2][0-9][0-9][0-9]$/.test(value));
    dispatch(changeInputYear(value))
  }

  const searchMovies = () => {
    dispatch(clearMoviesList())
    const params = {
      title: searchInputs.title,
      year: searchInputs.year,
      page: 1
    }
    dispatch(fetchMovies(params))
  }

  return (
    <>
      <form className="filters-container">
        <span>
          <label htmlFor="title">Название фильма: </label>
          <input
            type="search"
            name="title"
            value={searchInputs.title}
            onChange={(e) => dispatch(changeInputTitle(e.target.value))}
          />
        </span>
        <span>
          <label htmlFor="year">Год: </label>
          <input
            type="text"
            maxLength={4}
            minLength={4}
            name="year"
            value={searchInputs.year}
            onChange={(e) => yearChhangeHandler(e.target.value)}
          />
        </span>
        <button
          type="button"
          onClick={() => searchMovies()}
        >
          Поиск
        </button>
        <NavLink to={"/favorite"} className='favorite-nav'>
          <button type="button">В избранное</button>
        </NavLink>
      </form>
      <MovieList />
    </>
  );
}
