import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-viewer', 'Integration | Component | blog viewer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(12);

  // Set any properties with this.set('myProperty', 'value');
  var post = {
    title: 'Component Test',
    author: 'Jane Doe',
    body: 'Testing the text'
  };

  this.set('post', post);

  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-viewer post=post savePost="savePost" deletePost="deletePost"}}`);

  assert.equal(this.$('h3').text().trim(), 'Component Test');
  assert.equal(this.$('.author').text().trim(), 'Jane Doe');
  assert.equal(this.$('.body').text().trim(), 'Testing the text');

  /* Clicking Edit shows the Save button */
  var button = this.$("button.edit-btn");
  assert.equal(button.length, 1);
  button.click();

  this.on('savePost', val => {
    assert.equal(val.title, 'Component Test');
    assert.equal(val.author, 'Jane Doe');
    assert.equal(val.body, 'Testing the text');
  });

  button = this.$("button.save-btn");
  assert.equal(button.length, 1);
  button.click();

  this.on('deletePost', val => {
    assert.equal(val.title, 'Component Test');
    assert.equal(val.author, 'Jane Doe');
    assert.equal(val.body, 'Testing the text');
  });

  button = this.$("button.delete-btn");
  assert.equal(button.length, 1);
  button.click();
});
