import { useDispatch, useSelector } from "react-redux"
import * as actionTypes from '../store/actionTypes'

export const Error = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.mainReducer.serviceId)

  const repeatFetch = () => {
    id === -1 
    ? dispatch({ type: actionTypes.GET_SERVICE_LIST})
    : dispatch({ type: actionTypes.GET_SERVICE_DETAILS, payload: `${import.meta.env.VITE_SERVICE_URL}${id}`})
  }

  return (
    <div className="error-container">
      <span>Произошла ошибка!</span>
      <button type="button" onClick={() => repeatFetch()}>
        Повторить запрос
      </button>
    </div>
  );
}
