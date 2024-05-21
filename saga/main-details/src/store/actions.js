import * as actions from './actionTypes'

export const getServiceListSuccess = (response) => ({
    type: actions.GET_SERVICE_LIST_SUCCESS,
    payload: response
})

export const getServiceDetailsSuccess = (response) => ({
    type: actions.GET_SERVICE_DETAILS_SUCCESS,
    payload: response
})