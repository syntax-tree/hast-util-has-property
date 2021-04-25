var own = {}.hasOwnProperty

// Check if `node` has a set `name` property.
export function hasProperty(node, name) {
  var value =
    node &&
    node.type === 'element' &&
    node.properties &&
    own.call(node.properties, name) &&
    node.properties[name]

  return value !== null && value !== undefined && value !== false
}
