import { NavLink } from "react-router-dom";
import { Star } from "./Star";

export const MovieCard = (props) => {

    const {movie} = props

  return (
    <>
    {movie.Poster == "N/A" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#e8eaed"
          >
            <path d="M234-280h490L577-476 445-305l-93-127-118 152Zm6-218q93 0 157.5-64.75T462-720h-54q0 70-48.84 119-48.83 49-119.16 49v54Zm0-131q39 0 67-26.69T335-720h-95v91Zm-60 509q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0 0v-600 600Z" />
          </svg>
        ) : (
          <img src={movie.Poster} alt={`${movie.Poster} Poster`} />
        )}
        <div className="movie-search-card-description">
          <div className="movie-title">            
            <span className="lable">Год:</span>
            {movie.Year}
          </div>
          <div className="movie-title">            
            <span className="lable">Название:</span>
            {movie.Title}
          </div>
          <NavLink to={`/${movie.imdbID}`}>
            <button type="button">Подробнее</button>
          </NavLink>
        </div>
        <Star movie={movie} />
    </>
  )
}
