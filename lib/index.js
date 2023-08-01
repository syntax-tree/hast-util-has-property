/**
 * @typedef {import('hast').Nodes} Nodes
 */

const own = {}.hasOwnProperty

/**
 * Check if `node`is an element and has a `field` property.
 *
 * @param {unknown} node
 *   Thing to check (typically `Element`).
 * @param {unknown} field
 *   Field name to check (typically `string`).
 * @returns {boolean}
 *   Whether `node` is an element that has a `field` property.
 */
export function hasProperty(node, field) {
  const value =
    typeof field === 'string' &&
    isNode(node) &&
    node.type === 'element' &&
    node.properties &&
    own.call(node.properties, field) &&
    node.properties[field]

  return value !== null && value !== undefined && value !== false
}

/**
 * @param {unknown} value
 * @returns {value is Nodes}
 */
function isNode(value) {
  return Boolean(value && typeof value === 'object' && 'type' in value)
}
