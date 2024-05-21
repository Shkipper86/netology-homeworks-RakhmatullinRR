import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from "react-router-dom"
import {Error} from './Error'
import * as actionTypes from '../store/actionTypes'

export const ServiceDetails = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const loading = useSelector(state => state.mainReducer.loading)
    const fetchError = useSelector(state => state.mainReducer.fetchError)
    const serviceDetails = useSelector(state => state.mainReducer.serviceDetails)

useEffect(() => {
  dispatch({type: actionTypes.SET_SERVICE_DETAILS_ID, payload: location.pathname})
  dispatch({ type: actionTypes.GET_SERVICE_DETAILS, payload: `${import.meta.env.VITE_SERVICE_URL}${location.pathname}` });
}, []);



  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {fetchError ? (
            <Error />
          ) : (
            <>
              <div>{serviceDetails.name}</div>
              <div>{serviceDetails.price}</div>
              <div>{serviceDetails.content}</div>
            </>
          )}
        </div>
      )}
    </>
  );
}
