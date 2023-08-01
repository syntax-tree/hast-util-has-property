import assert from 'node:assert/strict'
import test from 'node:test'
import {hasProperty} from './index.js'

test('hasProperty', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'hasProperty'
    ])
  })

  await t.test('should return `false` without node', async function () {
    assert.equal(hasProperty(null, 'alpha'), false)
  })

  await t.test('should return `false` without `element`', async function () {
    assert.equal(hasProperty({type: 'text', value: 'alpha'}, 'bravo'), false)
  })

  await t.test('should return `false` without properties', async function () {
    assert.equal(hasProperty({type: 'element'}, 'charlie'), false)
  })

  await t.test(
    'should return `false` for prototypal properties',
    async function () {
      assert.equal(
        hasProperty({type: 'element', properties: {}}, 'toString'),
        false
      )
    }
  )

  await t.test(
    'should return `false` if the property does not exist',
    async function () {
      assert.equal(
        hasProperty(
          {
            type: 'element',
            properties: {id: 'delta'}
          },
          'echo'
        ),
        false
      )
    }
  )

  await t.test('should return `false` if without `name`', async function () {
    assert.equal(
      // @ts-expect-error: check how a missing name is handled.
      hasProperty({type: 'element', properties: {id: 'delta'}}),
      false
    )
  })

  await t.test(
    'should return `true` if the property does exist',
    async function () {
      assert.equal(
        hasProperty(
          {
            type: 'element',
            properties: {id: 'delta'}
          },
          'id'
        ),
        true
      )
    }
  )
})
