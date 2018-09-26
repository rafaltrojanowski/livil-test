import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse(store, primaryModalClass, payload, id, requestType) {
    payload = { items: payload }
    console.log(payload);
    return this._super(store, primaryModalClass, payload, id, requestType);
  },

  normalize(type, hash, property) {
    hash.id = `${hash.type}-${hash.id}`
    return this._super(type, hash, property)
  }

});
