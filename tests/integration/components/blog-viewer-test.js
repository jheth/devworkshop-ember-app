import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-viewer', 'Integration | Component | blog viewer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  var post = {
    title: 'Component Test',
    author: 'Jane Doe',
    body: 'Testing the text'
  };

  this.set('post', post);

  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-viewer post=post}}`);

  assert.equal(this.$('h3').text().trim(), 'Component Test');
  assert.equal(this.$('.author').text().trim(), 'Jane Doe');
  assert.equal(this.$('.body').text().trim(), 'Testing the text');

});
