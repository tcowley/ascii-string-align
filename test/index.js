var test = require('tape-catch');
var stringpad = require('../index.js');

test('test misc use cases', function (t) {
    t.plan(1);
    
    var a = '   A B   ';
    var b = stringpad(a, 5, 'justify');
    var c = 'A   B';
    t.equal(b, c, "string with outer whitespace is trimmed before padding");
    
});

test('test empty strings with various alignments', function (t) {
    t.plan(4);
    
    ['left', 'right', 'center', 'justify'].forEach(function(alignment) {
        var a = '';
        var b = stringpad(a, 10, alignment);
        var c = (new Array(11)).join(' ');
        t.equal(b, c, "empty string padded to specified width with alignment '" + alignment + "'");
    });

});

test('test short strings with various alignments', function (t) {
    t.plan(4);
    
    var c = [ 'A B C     ', '     A B C', '  A B C   ', 'A   B    C' ];

    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        var a = 'A B C';
        var b = stringpad(a, 10, alignment);
        t.equal(b, c[i], "short string padded to specified width with alignment '" + alignment + "'");
    });
   
});

test('test long strings with various alignments', function (t) {
    t.plan(4);
    
    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        var a = 'A B C D E F G H I J';
        var b = stringpad(a, 10, alignment);
        t.equal(b, a, "string longer than specified width is returned as-is for alignment '" + alignment + "'");
    });
    
});



