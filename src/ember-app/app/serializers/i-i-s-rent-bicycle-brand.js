import { Serializer as BicycleBrandSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rent-bicycle-brand';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BicycleBrandSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
