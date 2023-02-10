## deep-string-to-object
Convert a string separated by dots into a JavaScript object.

## Install
```
npm install --save deep-string-to-object
```

## Running tests
```
npm install
npm run test
```

## Usage
```javascript
var deepConvert = require('deep-string-to-object')

var chain = "a.b.c.d.e";
var value = 12;

deepConvert(chain, value)


> { a: { b: { c: { d: { e: 12 } } } } }
```

## Author
[Ilyass Mabrouk](https://github.com/work-state)

## License
[MIT](https://github.com/work-state/deep-string-to-object/blob/master/LICENSE)
