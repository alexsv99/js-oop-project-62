import StringSchema from './schema/StringSchema';
import NumberSchema from './schema/NumberSchema';

class Validator {
  schema;

  string() {
    this.schema = new StringSchema();

    return this.schema;
  }

  number() {
    this.schema = new NumberSchema();

    return this.schema;
  }
}

export default Validator;
