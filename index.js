/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Content} Content
 */

/**
 * @typedef {Root | Content} Node
 */

const own = {}.hasOwnProperty

/**
 * Check if `node` has a `field` property.
 *
 * @param {unknown} node
 * @param {string | null | undefined} field
 * @returns {boolean}
 */
export function hasProperty(node, field) {
  const value =
    field &&
    isNode(node) &&
    node.type === 'element' &&
    node.properties &&
    own.call(node.properties, field) &&
    node.properties[field]

  return value !== null && value !== undefined && value !== false
}

/**
 * @param {unknown} value
 * @returns {value is Node}
 */
function isNode(value) {
  return Boolean(value && typeof value === 'object' && 'type' in value)
}
