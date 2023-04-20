import StringSchema from './schema/StringSchema';
import NumberSchema from './schema/NumberSchema';
import ArraySchema from './schema/ArraySchema';
import ObjectSchema from './schema/ObjectSchema';

class Validator {
  _schema;

  _customValidators = {
    string: null,
    number: null,
    array: null,
  };

  getSchema() {
    return this._schema;
  }

  setSchema(schema) {
    this._schema = schema;
  }

  string() {
    this.setSchema(new StringSchema(this._customValidators.string));

    return this.getSchema();
  }

  number() {
    this.setSchema(new NumberSchema(this._customValidators.number));

    return this.getSchema();
  }

  array() {
    this.setSchema(new ArraySchema(this._customValidators.array));

    return this.getSchema();
  }

  object() {
    this.setSchema(new ObjectSchema());

    return this.getSchema();
  }

  addValidator(type, nameFunc, func) {
    this._customValidators[type] = Object.defineProperty(func, 'name', { value: nameFunc });
  }
}

export default Validator;
