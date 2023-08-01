import assert from 'node:assert/strict'
import test from 'node:test'
import {hasProperty} from 'hast-util-has-property'

test('hasProperty', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('hast-util-has-property')).sort(),
      ['hasProperty']
    )
  })

  await t.test('should return `false` without `element`', async function () {
    assert.equal(hasProperty({type: 'text', value: 'alpha'}, 'bravo'), false)
  })

  await t.test(
    'should return `false` for prototypal properties',
    async function () {
      assert.equal(
        hasProperty(
          {type: 'element', tagName: 'a', properties: {}, children: []},
          'toString'
        ),
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
            tagName: 'a',
            properties: {id: 'delta'},
            children: []
          },
          'echo'
        ),
        false
      )
    }
  )

  await t.test(
    'should return `true` if the property does exist',
    async function () {
      assert.equal(
        hasProperty(
          {
            type: 'element',
            tagName: 'a',
            properties: {id: 'delta'},
            children: []
          },
          'id'
        ),
        true
      )
    }
  )
})
