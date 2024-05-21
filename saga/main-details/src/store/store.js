import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import mainReducer from './reducer'
import {getListEpic, getDetailsEpic} from './epics'

const reducer = combineReducers({
    mainReducer: mainReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epic = combineEpics(
    getListEpic,
    getDetailsEpic
)
const epicMiddleware = createEpicMiddleware()
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
))

epicMiddleware.run(epic)
export default store