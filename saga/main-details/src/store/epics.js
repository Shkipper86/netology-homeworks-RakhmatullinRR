import {ofType} from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import {catchError, map, mergeMap} from 'rxjs/operators'
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import { of } from 'rxjs'


export const getListEpic = action$ => action$.pipe(
    ofType(actionTypes.GET_SERVICE_LIST),
    mergeMap(() => 
        ajax.getJSON(import.meta.env.VITE_SERVICE_URL).pipe(
            map(response => actions.getServiceListSuccess(response)),
            catchError(() => of({
                type: actionTypes.FETCH_SERVICE_REJECTED,
                error: true
            }))
        )        
    )
   
)

export const getDetailsEpic = action$ => action$.pipe(
    ofType(actionTypes.GET_SERVICE_DETAILS),
    mergeMap((action) => 
        ajax.getJSON(action.payload).pipe(
            map(response => actions.getServiceDetailsSuccess(response)),
            catchError(() => of({
                type: actionTypes.FETCH_SERVICE_REJECTED,
                error: true
            }))
        )        
    )
   
)
