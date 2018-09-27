import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      users: this.store.findAll('user'),
      posts: this.store.findAll('post')
    });
  },

  setupController(controller, model) {
    // let items = this.store.peekAll('item');
    // https://stackoverflow.com/a/23485083/1590134

    let items = [];

    let stream = Ember.A();
    stream.pushObjects(model.users.toArray());
    stream.pushObjects(model.posts.toArray());
    controller.set('stream', stream)

    controller.set('items', items)

    controller.set('itemsCount', items.get('length'))
    this._super(...arguments);
  }

});
