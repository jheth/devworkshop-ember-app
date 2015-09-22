import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  publishedAt: DS.attr('date'),
  author: DS.attr('string')
});
