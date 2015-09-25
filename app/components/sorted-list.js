import Ember from 'ember';

export default Ember.Component.extend({
  list: Ember.A([]),
  sortBy: 'id',
  direction: 'asc',

  sortedList: Ember.computed('list.[]', function() {
    var sorted = this.get('list').sortBy(this.get('sortBy'));
    if ( this.get('direction') === 'desc') {
      sorted = sorted.reverse();
    }
    return sorted;
  })

});
