import { legacy_createStore, compose } from 'redux'
import  reducer from './reducer'

const store = legacy_createStore (
    reducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store