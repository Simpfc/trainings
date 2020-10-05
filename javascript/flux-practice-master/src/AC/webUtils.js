import $ from 'jquery';
import AppDispatcher from './../dispatcher/index.js';
import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants.js';

export function loadAllArticlesCall () {
    return $.get('/api/article')
}

export function asyncACFactory (apiCall, actionType) {
    return () => {
        AppDispatcher.dispatch({
            type: actionType + START
        });

        apiCall().done( response => AppDispatcher.dispatch({
            type: actionType + SUCCESS,
            payload: {response}
        })).fail( error => AppDispatcher.dispatch({
            type: actionType + FAIL,
            payload: {error}
        }));
    }
}