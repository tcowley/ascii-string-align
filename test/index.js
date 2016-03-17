var test = require('tape-catch');
var stringpad = require('../index.js');

test('test string length', function (t) {
    var a = 'aaa                   ';
    var b;
    t.plan(2);
    
    b = stringpad(a.slice(0,3), 10);
    t.equal(b, a.slice(0,10), "string shorter than specified width is padded to width");

    b = stringpad(a.slice(0,10), 2);
    t.equal(b, a.slice(0,10), "string longer than specified width is returned as-is");
});

test('test empty string with alignment', function (t) {
    var a = '';
    var b;
    var c = (new Array(10)).join(' ');
    t.plan(4);
    
    ['left', 'right', 'center', 'justify'].forEach(function(alignment) {
        b = stringpad(a, 10, alignment);
        t.equal(b, c, "empty string padded to specified to width with align " + alignment);
    });

});


