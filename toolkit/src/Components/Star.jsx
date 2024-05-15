import { addFavorite, removeFavorite } from "../Slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export const Star = (props) => {
  
  const dispatch = useDispatch()
  const List = useSelector(state => state.search.lists)
    const {movie} = props

   const status = List.favoriteMovies.some(
     (fMovie) => fMovie.imdbID === movie.imdbID
   );

  return (
    <div className="favorite-status">
      {status ? (
        <svg
          fill="#D3BCA2"
          height="40px"
          viewBox="0 0 18 18"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => dispatch(removeFavorite(movie.imdbID))}
        >
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#D3BCA2"          
          onClick={() => dispatch(addFavorite(movie))}
        >
          <path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z" />
        </svg>
      )}
    </div>
  );
}
