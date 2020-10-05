export default  class DataWrapper {
    constructor (item, store) {
        Object.assign(this, item);
        this._store = store;
    }

    getRelation (relation) {
        const relStore = this._store.getStore()[relation];
        if (!relStore || !this[relation]) return [];
        return this[relation].map(relStore.getById);
    }
}