# fn-map

ES6 function map. Typed map using string as key and function as value.

# Example

```JavaScript
let FunctionMap = require('fn-map');

let map = FunctionMap
  .create()
  .use('foo', () => 'foo')
  .use('bar', () => 'bar');

map.get('foo')(); // foo
map.get('bar')(); // bar
```

# Install

```
npm install fn-map --save
```

# License

MIT