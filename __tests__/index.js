import fromIter from 'callbag-from-iter'
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'

import pluck from '../src'

test('works with a single prop', () => {
  const actual = []

  pipe(
    fromIter([{ name: 'Jurek' }, { name: 'John' }, { name: 'Sherlock' }]),
    pluck('name'),
    forEach(data => {
      actual.push(data)
    }),
  )

  expect(actual).toEqual(['Jurek', 'John', 'Sherlock'])
})

test('works with multiple nested properties', () => {
  const actual = []

  pipe(
    fromIter([
      { some: { nested: { path: 'Apple' } } },
      { some: { nested: { path: 'Banana' } } },
      { some: { nested: { path: 'Orange' } } },
    ]),
    pluck(['some', 'nested', 'path']),
    forEach(data => {
      actual.push(data)
    }),
  )

  expect(actual).toEqual(['Apple', 'Banana', 'Orange'])
})
