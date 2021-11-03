import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rent-rental-point', 'Unit | Model | i-i-s-rent-rental-point', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-rent-bicycle-brand',
    'model:i-i-s-rent-bicycle',
    'model:i-i-s-rent-biycle-rent',
    'model:i-i-s-rent-rental-point',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
