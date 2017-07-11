import { createStore } from 'redux';
import {reducer} from './reducer'
import {add,message} from './action'
const store = createStore(reducer);

store.subscribe(()=>console.log("current state:",store.getState()))

store.dispatch(add())

store.dispatch(add())

store.dispatch(add())

store.dispatch(message("test1"))

store.dispatch(message("test2"))

store.dispatch(add())