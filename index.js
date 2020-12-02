'use strict'

var own = {}.hasOwnProperty

module.exports = hasProperty

// Check if `node` has a set `name` property.
function hasProperty(node, name) {
  var value =
    node &&
    node.type === 'element' &&
    node.properties &&
    own.call(node.properties, name) &&
    node.properties[name]

  return value !== null && value !== undefined && value !== false
}
