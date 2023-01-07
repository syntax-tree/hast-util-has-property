import assert from 'node:assert/strict'
import test from 'node:test'
import {hasProperty} from './index.js'
import * as mod from './index.js'

test('hasProperty', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['hasProperty'],
    'should expose the public api'
  )

  assert.equal(
    hasProperty(null, 'alpha'),
    false,
    'should return `false` without node'
  )

  assert.equal(
    hasProperty({type: 'text', value: 'alpha'}, 'bravo'),
    false,
    'should return `false` without `element`'
  )

  assert.equal(
    hasProperty({type: 'element'}, 'charlie'),
    false,
    'should return `false` without properties'
  )

  assert.equal(
    hasProperty({type: 'element', properties: {}}, 'toString'),
    false,
    'should return `false` for prototypal properties'
  )

  assert.equal(
    hasProperty(
      {
        type: 'element',
        properties: {id: 'delta'}
      },
      'echo'
    ),
    false,
    'should return `false` if the property does not exist'
  )

  assert.equal(
    // @ts-expect-error runtime.
    hasProperty({type: 'element', properties: {id: 'delta'}}),
    false,
    'should return `false` if without `name`'
  )

  assert.equal(
    hasProperty(
      {
        type: 'element',
        properties: {id: 'delta'}
      },
      'id'
    ),
    true,
    'should return `true` if the property does exist'
  )
})
