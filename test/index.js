'use strict';
var test = require('tape-catch');
var asciiStringAlign = require('../index.js');

test('[halfwidth] test misc use cases', function (t) {
    t.plan(1);
    
    var a = '   A B   ';
    var b = asciiStringAlign(a, 5, 'justify');
    var c = 'A   B';
    t.equal(b, c, "string with outer whitespace is trimmed before padding");
    
});

test('[fullwidth] test misc use cases', function (t) {
    t.plan(1);
    
    var a = '   台 B  ';
    var b = asciiStringAlign(a, 5, 'justify');
    var c = '台  B';
    t.equal(b, c, "string with outer whitespace is trimmed before padding");
    
});

test('test empty strings with various alignments', function (t) {
    t.plan(4);
    
    ['left', 'right', 'center', 'justify'].forEach(function(alignment) {
        var a = '';
        var b = asciiStringAlign(a, 10, alignment);
        var c = (new Array(11)).join(' ');
        t.equal(b, c, "empty string padded to specified width with alignment '" + alignment + "'");
    });

});

test('[halfwidth] test short strings with various alignments', function (t) {
    t.plan(8);
    var a, b, c;

    c = [ 'A B C     ', '     A B C', '  A B C   ', 'A   B    C' ];
    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        a = 'A B C';
        b = asciiStringAlign(a, 10, alignment);
        t.equal(b, c[i], "short string padded to specified width(10) with alignment '" + alignment + "'");
    });

    c = [ 'A B C      ', '      A B C', '   A B C   ', 'A    B    C' ];
    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        a = 'A B C';
        b = asciiStringAlign(a, 11, alignment);
        t.equal(b, c[i], "short string padded to specified width(11) with alignment '" + alignment + "'");
    });
});

test('[fullwidth] test short strings with various alignments', function (t) {
    t.plan(8);
    var a, b, c;
   
    c = [ '台 B 灣   ', '   台 B 灣', ' 台 B 灣  ', '台  B   灣' ];
    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        a = '台 B 灣';
        b = asciiStringAlign(a, 10, alignment);
        t.equal(b, c[i], "short string padded to specified width(10) with alignment '" + alignment + "'");
    });

    c = [ '台 B c     ', '     台 B c', '  台 B c   ', '台   B    c' ];
    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        a = '台 B c';
        b = asciiStringAlign(a, 11, alignment);
        t.equal(b, c[i], "short string padded to specified width(11) with alignment '" + alignment + "'");
    });
});

test('[halfwidth] test long strings with various alignments', function (t) {
    t.plan(4);
    var a, b;

    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        a = 'A B C D E F G H I J';
        b = asciiStringAlign(a, 10, alignment);
        t.equal(b, a, "string longer than specified width is returned as-is for alignment '" + alignment + "'");
    });
});

test('[fullwidth] test long strings with various alignments', function (t) {
    t.plan(4);
    var a, b;
    
    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        a = '台 灣 C D E 第 G H I 一';
        b = asciiStringAlign(a, 10, alignment);
        t.equal(b, a, "string longer than specified width is returned as-is for alignment '" + alignment + "'");
    });
});


