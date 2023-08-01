import type {Element, Root, RootContent} from 'hast'
import {expectAssignable, expectType} from 'tsd'
import {hasProperty} from './index.js'

const aWithTitle = (function (): Root | RootContent {
  return {type: 'element', tagName: 'a', properties: {title: 'a'}, children: []}
})()

if (hasProperty(aWithTitle, 'title')) {
  expectAssignable<Element>(aWithTitle)
  expectType<
    Element & {
      properties: Record<
        'title',
        Array<number | string> | number | string | true
      >
    }
  >(aWithTitle)
  expectType<Array<number | string> | number | string | true>(
    aWithTitle.properties.title
  )
}
