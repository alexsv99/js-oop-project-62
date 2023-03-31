import StringSchema from './schema/StringSchema';
import NumberSchema from './schema/NumberSchema';
import ArraySchema from './schema/ArraySchema';
import ObjectSchema from './schema/ObjectSchema';

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

  object() {
    this.setSchema(new ObjectSchema());

    return this.getSchema();
  }
}

export default Validator;
