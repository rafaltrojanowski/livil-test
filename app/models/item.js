import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  name: DS.attr(),
  username: DS.attr(),
  type: DS.attr()
});
