# callbag-pluck

Callbag operator that maps to object properties. It intentionally doesn't support default values and expects that path exists (nested property access is not "safe").

## Examples

### Single prop

```js
import fromIter from 'callbag-from-iter'
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import pluck from 'callbag-pluck'

pipe(
  fromIter([{ name: 'Jurek' }, { name: 'John' }, { name: 'Sherlock' }]),
  pluck('name'),
  forEach(data => {
    // will log 'Jurek', 'John', 'Sherlock'
    console.log(data)
  }),
)
```

### Multiple nested properties

```js
import fromIter from 'callbag-from-iter'
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import pluck from 'callbag-pluck'

pipe(
  fromIter([
    { some: { nested: { path: 'Apple' } } },
    { some: { nested: { path: 'Banana' } } },
    { some: { nested: { path: 'Orange' } } },
  ]),
  pluck(['some', 'nested', 'path']),
  forEach(data => {
    // will log 'Apple', 'Banana', 'Orange'
    console.log(data)
  }),
)
```

## Alternatives

* [callbag-map-delve](https://github.com/jaw977/callbag-map-delve)
