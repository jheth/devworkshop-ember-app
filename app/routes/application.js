import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  },
  actions: {
    savePost: function(post) {
      post.save()
    },
    deletePost: function(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }

});
