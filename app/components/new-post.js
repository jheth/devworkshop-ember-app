import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mdl-card', 'mdl-shadow--4dp', 'mdl-cell', 'mdl-cell--12-col'],

  actions: {
    save: function() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author')
      };

      this.sendAction('createPost', params);
    }
  }
});
