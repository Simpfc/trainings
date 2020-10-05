import BasicStore  from './BasicStore.js';
import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants.js';

export default class ArticleStore extends BasicStore{
    constructor (...args) {
        super(...args);
        this.errors = [];
        this._registerActionSubscription( (action) => {
            const  {type, payload} = action;

            switch (type) {
                case DELETE_ARTICLE :
                    this._delete(payload.id);
                    break;
                case LOAD_ALL_ARTICLES  + START:
                    this.loading = true;
                    break;
                case LOAD_ALL_ARTICLES + SUCCESS:
                    payload.response.forEach(this._add);
                    this.loading = false;
                    break;
                case LOAD_ALL_ARTICLES + FAIL:
                    payload.response.forEach(this._add);
                    this.errors.push(payload.error);
                    break;
                default : return;
            }
            this.emitChange();
        });
    }
}

