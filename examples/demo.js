'use strict';
const align = require('../index.js');
main();

function main() {

    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        let a = 'A B C';
        let width = 10;
        let outStr = align(a, width, alignment);
        console.log('\'' + outStr + '\' - ' + align(alignment, 13) + ' - width: ' + width);
    });

    ['left', 'right', 'center', 'justify'].forEach(function(alignment, i) {
        let a = '台 B 灣';
        let width = 15;
        let outStr = align(a, width, alignment);
        console.log('\'' + outStr + '\' - ' + align(alignment, 8) + ' - width: ' + width);
    });    

    {
        let a = '   A B   ';
        let width = 5;
        let b = align(a, width, 'justify');
        console.log('\'' + a + '\' -> \'' + b + '\' - ' + 'justify' + ' - width: ' + width);
    }
    {
        let a = '   台 B  ';
        let width = 5;
        let b = align(a, width, 'justify');
        console.log('\'' + a + '\' -> \'' + b + '\' - ' + 'justify' + ' - width: ' + width);
    }
}