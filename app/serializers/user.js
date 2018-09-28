import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse(store, primaryModalClass, payload, id, requestType) {
    // payload = { users: payload, items: payload }
    payload = { users: payload }
    console.log(payload);
    return this._super(store, primaryModalClass, payload, id, requestType);
  },

});
