import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  ValidationRules,
  Model as RentalPointMixin
} from '../mixins/regenerated/models/i-i-s-rent-rental-point';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, RentalPointMixin, Validations, {
});

export default Model;
