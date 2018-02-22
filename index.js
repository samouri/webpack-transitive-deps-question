import Ajv from 'ajv'; // ideally this would fail with a ReferenceError
const ajv = new Ajv();

const schema = { type: 'object' }
const validate = ajv.compile(schema);

console.log('ajv is not a dependency, and yet we can use it to validate json schemas anyway!');
console.log('is {} an object: ' + validate({}));
console.log('is 5 an object: ' + validate(5));
