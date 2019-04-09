import {createStore} from 'redux';
import {topicsReducer} from './../reducers/topicsReducer';

export const Store = createStore(topicsReducer)