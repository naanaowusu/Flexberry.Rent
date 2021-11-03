import { Serializer as BicycleSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rent-bicycle';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BicycleSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
