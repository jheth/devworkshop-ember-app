import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-post', 'Integration | Component | new post', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(6);

  this.render(hbs`{{new-post}}`);

  assert.equal(this.$('.title input').val().trim(), '');
  assert.equal(this.$('.author input').val().trim(), '');
  assert.equal(this.$('.body textarea').val().trim(), '');

  // Set any properties with this.set('myProperty', 'value');
  this.set('t', 'Placeholder');
  this.set('a', 'Jane Doe');
  this.set('b', 'This is a test.');

  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-post title=t author=a body=b}}`);

  assert.equal(this.$('.title input').val().trim(), 'Placeholder');
  assert.equal(this.$('.author input').val().trim(), 'Jane Doe');
  assert.equal(this.$('.body textarea').val().trim(), 'This is a test.');

});
