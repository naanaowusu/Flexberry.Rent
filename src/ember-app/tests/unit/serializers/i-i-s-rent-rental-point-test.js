import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rent-rental-point', 'Unit | Serializer | i-i-s-rent-rental-point', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-rent-rental-point',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
