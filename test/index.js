var test = require('tape-catch');
var stringpad = require('../index.js');

test('test string length', function (t) {
    var a = 'aaa';
    var b;
    var c;
    t.plan(3);
    
    b = stringpad(a, 10);
    c = 'aaa       ';
    t.equal(b, c, "string shorter than specified width is padded to width");
    
    a = 'aaaa a aaaa aaaaaa';
    b = stringpad(a, 10);
    c = a;
    t.equal(b, c, "string longer than specified width and with no outer whitespace is returned as-is");
    
    a = '   A B   ';
    b = stringpad(a, 5, 'justify');
    c = 'A   B';
    t.equal(b, c, "string with outer whitespace is trimmed before padding");
    
});

test('test empty string with alignment', function (t) {
    t.plan(4);
    
    ['left', 'right', 'center', 'justify'].forEach(function(alignment) {
        var a = '';
        var b = stringpad(a, 10, alignment);
        var c = (new Array(11)).join(' ');
        t.equal(b, c, "empty string padded to specified width with alignment '" + alignment + "'");
    });

});

test('test short strings with various alignments', function (t) {
    t.plan(3);
    var a = 'one';
    var s = '                        ';
    var b = stringpad(a, 10);
    var c = (a + s).slice(0,10);
    //console.log('[' + b + ']', '[' + c + ']' );
    t.equal(b, c, "short string padded to specified width with alignment 'left'");

    b = stringpad(a, 10, 'right');
    c = (s + a).slice(-10);
    //console.log('[' + b + ']', '[' + c + ']' );
    t.equal(b, c, "short string padded to specified width with alignment 'right'");

    // 1234one890
    b = stringpad(a, 10, 'center');
    c = s.slice(-3) + a + s.slice(-4);
    //console.log('[' + b + ']', '[' + c + ']' );
    t.equal(b, c, "short string padded to specified width with alignment 'center'");

});



