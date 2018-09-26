import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'https://jsonplaceholder.typicode.com',

  pathForType(type) {
    return `${type}s`;
  }

});