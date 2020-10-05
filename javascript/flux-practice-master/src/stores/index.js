import {normalizedComments} from './../fixtures.js';
import ArticleStore from './ArticleStore.js';
import BasicStore from './BasicStore.js';

const  stores = {};
Object.assign(stores, {
    comments: new  BasicStore(stores, normalizedComments),
    articles: new  ArticleStore(stores)
})

export default stores;
export const commentStore = stores.comments;
export const articleStore = stores.articles;
