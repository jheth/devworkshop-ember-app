import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mdl-card', 'mdl-shadow--4dp', 'mdl-cell', 'mdl-cell--12-col'],
  isEditing: false,

  isFavorite: function() {
    return this.get('post.favoriteCount') > 0 ? 'active' : '';
  }.property('post.favoriteCount'),

  isBookmarked: function() {
    return this.get('post.bookmarked') ? 'active' : '';
  }.property('post.bookmarked'),

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.sendAction('savePost', this.get('post'));
    },
    delete: function() {
      this.sendAction('deletePost', this.get('post'));
    },

    markAsFavorite: function() {
      this.incrementProperty('post.favoriteCount');
    },
    bookmark: function() {
      this.toggleProperty('post.bookmarked');
    }
  }
});
