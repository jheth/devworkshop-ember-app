import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mdl-card', 'mdl-shadow--4dp', 'mdl-cell', 'mdl-cell--12-col'],
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    }
  }
});
