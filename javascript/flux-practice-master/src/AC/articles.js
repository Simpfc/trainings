import AppDispatcher from '../dispatcher/index.js';
import {DELETE_ARTICLE, LOAD_ALL_ARTICLES} from '../constants.js';
import {loadAllArticlesCall, asyncACFactory} from './webUtils.js';

export function deleteArticle (id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id: id }
    }
    AppDispatcher.dispatch(action);
}

export const loadAllArticles  = asyncACFactory(loadAllArticlesCall, LOAD_ALL_ARTICLES);