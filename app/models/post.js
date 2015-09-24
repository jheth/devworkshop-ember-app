import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  publishedAt: DS.attr('date'),
  author: DS.attr('string'),
  favoriteCount: DS.attr('number', {defaultValue: 0}),
  isBookmarked: DS.attr('boolean', {defaultValue: false})
});
