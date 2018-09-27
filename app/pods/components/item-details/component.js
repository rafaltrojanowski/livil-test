import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  itemText: Ember.computed('item', function() {
    let type = this.item._internalModel.modelName

    if(type === "user") {
      return `User ${this.item.name} has username ${this.item.username}.`;
    } else if (type === "post") {
      return `Post title: "${this.item.title}" has body: ${this.item.body}.`;
    }
  })

});
