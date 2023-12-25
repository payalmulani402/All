const { applyMiddleware } = require("redux")
const redux = require("redux") 
const ReduxLogger = require("redux-logger")

const createStore = redux.createStore 
const logger = ReduxLogger.createLogger()
 
const BUY_CAKE = 'BUY_CAKE' 
const BUY_FOOD = 'BUY_FOOD' 
 
function buyCake(){ 
    return{ 
        type:BUY_CAKE, 
        info:'first redux action' 
    } 
} 
function buyFood(){ 
    return{ 
        type:BUY_FOOD, 
        info:'second redux action' 
    } 
} 
 
const initialState ={ 
    numOfCakes:10, 
    numOffood:20, 
} 
 
const reducer = (state = initialState,action) => { 
    switch(action.type){ 
        case BUY_CAKE :return{ 
            ...state, 
            numOfCakes:state.numOfCakes - 3
        } 
         
    } 
    switch(action.type){ 
        case BUY_FOOD :return{ 
            ...state, 
            numOffood:state.numOffood - 1 
        } 
        default:return state 
    } 
} 
 
const store = createStore(reducer, applyMiddleware(logger)) 
console.log('inital state', store.getState()); 
 
const unsubcribe = store.subscribe(() => {}) 
store.dispatch(buyCake()) 
store.dispatch(buyCake()) 
store.dispatch(buyFood()) 
store.dispatch(buyFood()) 
 
unsubcribe();