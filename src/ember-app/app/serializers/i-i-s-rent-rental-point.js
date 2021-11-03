import { Serializer as RentalPointSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rent-rental-point';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RentalPointSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
