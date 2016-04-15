// Dependencies:
var hasProperty = require('./index.js');

// Checks:
var a = hasProperty({
    'type': 'text',
    'value': 'alpha'
}, 'bravo');

var b = hasProperty({
    'type': 'element',
    'tagName': 'div',
    'properties': {
        'id': 'bravo'
    },
    'children': []
}, 'className');


var c = hasProperty({
    'type': 'element',
    'tagName': 'div',
    'properties': {
        'id': 'charlie'
    },
    'children': []
}, 'id');

// Yields:
console.log('txt', ['a: ' + a, 'b: ' + b, 'c: ' + c].join('\n'));
