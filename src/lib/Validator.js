import StringSchema from './schema/StringSchema';

class Validator {
  string() {
    this.schema = new StringSchema();

    return this.schema;
  }
}

export default Validator;
