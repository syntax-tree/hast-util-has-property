/**
 * @typedef {import('hast').Nodes} Nodes
 */

const own = {}.hasOwnProperty

/**
 * Check if `node` is an element and has a `name` property.
 *
 * @param {Nodes} node
 *   Node to check (typically `Element`).
 * @param {string} name
 *   Property name to check.
 * @returns {boolean}
 *   Whether `node` is an element that has a `name` property.
 */
export function hasProperty(node, name) {
  const value =
    node.type === 'element' &&
    node.properties &&
    own.call(node.properties, name) &&
    node.properties[name]

  return value !== null && value !== undefined && value !== false
}
