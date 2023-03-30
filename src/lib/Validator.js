import StringSchema from './schema/StringSchema';
import NumberSchema from './schema/NumberSchema';
import ArraySchema from './schema/ArraySchema';

class Validator {
  #schema;

  getSchema() {
    return this.#schema;
  }

  setSchema(schema) {
    this.#schema = schema;
  }

  string() {
    this.setSchema(new StringSchema());

    return this.getSchema();
  }

  number() {
    this.setSchema(new NumberSchema());

    return this.getSchema();
  }

  array() {
    this.setSchema(new ArraySchema());

    return this.getSchema();
  }
}

export default Validator;
