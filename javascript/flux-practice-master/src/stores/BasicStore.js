import {EventEmitter} from 'events';
import AppDispatcher from './../dispatcher/index.js';
import DataWrapper from 'dataWrapper.js';

export default class BasicStore extends EventEmitter{
    constructor (stores, initialState) {
        super();
        this._items = {};
        this._stores = stores;
        initialState.forEach(this._add);

    }

    _registerActionSubscription(callback) {
        this.dispatchToken = AppDispatcher.register(callback)
    }

    _delete = (id) => {
        delete this._items[id]
    }

    _add = (item) => {
        this._items[item.id] = new DataWrapper(item);
    }

    getStores () {
        return this._stores;
    }

    getById = (id) => {
        return this._items[id];
    }

    getAll() {
        return Object.keys(this._items).map(this.getById);
    }

    addChangeListener (callback) {
        this.on("SOME_INTERNAL_EVENT", callback );
    }

    removeChangeListener (callback) {
        this.removeListener("SOME_INTERNAL_EVENT", callback );
    }

    emitChange () {
        this.emit("SOME_INTERNAL_EVENT" );
    }
}

