import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  details: Ember.computed('item', function() {
    if(this.item.type === "users") {
      return `User ${this.item.name} has username ${this.item.username}.`;
    } else {
      return `Post title: "${this.item.title}" has body: ${this.item.body}.`;
    }
  })

});
