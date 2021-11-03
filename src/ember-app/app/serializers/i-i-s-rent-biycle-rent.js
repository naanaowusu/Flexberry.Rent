import { Serializer as BiycleRentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rent-biycle-rent';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BiycleRentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
