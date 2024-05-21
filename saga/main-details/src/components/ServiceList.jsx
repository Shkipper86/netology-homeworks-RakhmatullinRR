import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from "../store/actionTypes"
import {NavLink} from 'react-router-dom'
import {Error} from './Error'


export const ServiceList = () => {
    const dispatch = useDispatch()
    const serviceList = useSelector(state => state.mainReducer.serviceList)
    const loading = useSelector(state => state.mainReducer.loading)
    const fetchError = useSelector(state => state.mainReducer.fetchError)

useEffect(() => {  
  dispatch({type: actionTypes.SET_SERVICE_DETAILS_ID, payload: -1})
  dispatch({type: actionTypes.GET_SERVICE_LIST})
}, [])

const list = serviceList.map(service => {
  return (
    <li key={service.id}>
      <NavLink to={`/${service.id}`}>
        {service.name} {service.price}
      </NavLink>
    </li>
  );
})

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>{fetchError ? <Error /> : <ul>{list}</ul>}</div>
      )}
    </>
  );
}
