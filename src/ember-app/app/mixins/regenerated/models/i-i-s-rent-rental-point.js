import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  address: DS.attr('string')
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-rent-rental-point.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
