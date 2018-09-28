import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({

  models: ['user', 'post'],

  model() {
    let store = this.store;

    this.flushStore(store);

    return RSVP.hash({
      users: store.findAll('user'),
      posts: store.findAll('post')
    });
  },

  setupController(controller, model) {
    let stream = A();
    stream.pushObjects(model.users.toArray());
    stream.pushObjects(model.posts.toArray());
    controller.set('stream', stream)
    controller.set('itemsCount', stream.get('length'))
    this._super(...arguments);
  },

  flushStore(store) {
    this.get('models').forEach(function(element) {
      store.unloadAll(element)
    });
  }

});
