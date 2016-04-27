# ascii-string-align  ![Build Status](https://travis-ci.org/tcowley/ascii-string-align.svg?branch=master)

## Description

Using JavaScript, trim, then pad an ASCII string to a specific width, and with a given alignment: left, right, center, justify.


## Description

Using Node.js, trim then pad an ASCII string to a specific width. Optionally specify a given alignment of the text: **left**, **right**, **center**, **justify**.

Please note that the library may not format multi-byte strings nicely, so ASCII is all that is really supported. 


## Installation

Add this library to your current Node.js project using npm:

```
npm install --save https://github.com/tcowley/ascii-string-align
```

Or, checkout the source:

```
git clone https://github.com/tcowley/ascii-string-align
```


## Code Example

Here is a basic code example. Full behaviour is documented in the **API Reference** below

```JavaScript
var asciiStringAlign = require('ascii-string-align');

var myString = 'a b c d e';

var width = 20;

var alignedString = asciiStringAlign(myString, width, 'justify');

console.log('[' + alignedString + ']');
```

This example will output:

```bash
[a   b    c    d    e] 
```


## API Reference 

#### Basics

The library exports one method, which accepts two parameters:

| Param | Values | Description |
| ----- | ------- | ------ |
| **asciiString** | Any length of ASCII string  | The string to be padded with spaces to the specified **width**. |
| **width**   | Any positive integer  | The width, in characters, that the resulting string should be. If width is shorter than the length of **asciiString**, **asciiString** will be returned unchanged. |
| **alignment** | _Optional_. One of 'left', 'right', 'center' or 'justify'. Default is 'left'  | Determines how spaces are added to the string. See **String Aligment**, below for examples. |

The return value is always a string. Illegal inputs throw an error.

#### String Alignment Examples

```JavaScript
asciiStringAlign("a b c d e", 20, 'left');       // 'a b c d e           '

asciiStringAlign("a b c d e", 20, 'right');     // '           a b c d e'

asciiStringAlign("a b c d e", 20, 'center');    // '     a b c d e      '

asciiStringAlign("a b c d e", 20, 'justify');   // 'a   b    c    d    e'
```


## Tests

Tests are run automatically using Travis CI, but you can run them yourself quite easily.

```bash
$ git clone https://github.com/tcowley/ascii-string-align
$ cd ascii-string-align
$ npm install
$ npm test

// test output displays here
 
```


The project is using [Tape](/substack/tape) for writing tests. For a small project like this, tape is _very_ easy to use.

## License

[ISC](https://opensource.org/licenses/ISC)


