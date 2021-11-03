import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  identifier: DS.attr('string'),
  brand: DS.belongsTo('i-i-s-rent-bicycle-brand', { inverse: null, async: false })
});

export let ValidationRules = {
  identifier: {
    descriptionKey: 'models.i-i-s-rent-bicycle.validations.identifier.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  brand: {
    descriptionKey: 'models.i-i-s-rent-bicycle.validations.brand.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
