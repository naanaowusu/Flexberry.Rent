import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  startOfRent: DS.attr('date'),
  duration: DS.attr('decimal'),
  endOfRent: DS.attr('date'),
  leftAt: DS.belongsTo('i-i-s-rent-rental-point', { inverse: null, async: false }),
  rentedBicycle: DS.belongsTo('i-i-s-rent-bicycle', { inverse: null, async: false }),
  getAt: DS.belongsTo('i-i-s-rent-rental-point', { inverse: null, async: false })
});

export let ValidationRules = {
  startOfRent: {
    descriptionKey: 'models.i-i-s-rent-biycle-rent.validations.startOfRent.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  duration: {
    descriptionKey: 'models.i-i-s-rent-biycle-rent.validations.duration.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  endOfRent: {
    descriptionKey: 'models.i-i-s-rent-biycle-rent.validations.endOfRent.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  leftAt: {
    descriptionKey: 'models.i-i-s-rent-biycle-rent.validations.leftAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  rentedBicycle: {
    descriptionKey: 'models.i-i-s-rent-biycle-rent.validations.rentedBicycle.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  getAt: {
    descriptionKey: 'models.i-i-s-rent-biycle-rent.validations.getAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
