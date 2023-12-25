import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';

import { Reducer } from './Redux/Reducer'
import logger from 'redux-logger'


const store = createStore(Reducer,composeWithDevTools (applyMiddleware(logger)))

export default store
