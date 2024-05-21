import * as actions from './actionTypes'

const initialState = {
    serviceList: [],
    serviceDetails: {},
    loading: false,
    fetchError: false,
    serviceId: -1
}

export default function mainReducer (state = initialState, action) {
    switch (action.type) {
      case actions.GET_SERVICE_LIST:
        return {
          ...state,
          loading: true,
          fetchError: false
        }
      case actions.GET_SERVICE_LIST_SUCCESS:
        return {
          ...state,
          serviceList: action.payload,
          loading: false,
        }
      case actions.GET_SERVICE_DETAILS:
        return {
          ...state,
          loading: true,
          fetchError: false
        }
      case actions.GET_SERVICE_DETAILS_SUCCESS:
        return {
          ...state,
          serviceDetails: action.payload,
          loading: false
        }
      case actions.FETCH_SERVICE_REJECTED:
        return {
          ...state,
          loading: false,
          fetchError: true,
        }
      case actions.SET_SERVICE_DETAILS_ID:
        return {
          ...state,
          serviceId: action.payload
        }
      default:
        return state;
    }
}