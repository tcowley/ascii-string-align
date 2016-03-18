// --------------------------------------------------------------------------------
// String Pad Library
// --------------------------------------------------------------------------------

module.exports = function stringPad(rawStr, width, align) {
    var spaces = (new Array(width + 1)).join(' ');
    var paddedStr = '';
    var str = rawStr.trim();
    var right;
    var left;
    var words;
    var padding;
    
    if (str.length >= width) {
        return rawStr;
    }
    
    switch (align) {
    
        case 'right':
            paddedStr = (spaces + str).slice( -width );
            break;
        
        case 'center':
            left = Math.floor((width - str.length)/2);
            right = width - str.length - left;
            paddedStr = (spaces + str).slice(-(str.length + left));
            paddedStr = (paddedStr + spaces).slice(0, width);
            break;
        
    case 'justify':
            // - justified strings are trimmed, then spaces are added between words until width is reached.
            // - spacing has a bias to the right; ie, on average there will be more spaces on the right half than the left.
            str = str.trim();
            words = str.split(' ');
            if (words.length < 2) {
                paddedStr = (str + spaces).slice(0, width);
            }
            else {
                padding = spaces.slice(0, width - str.length).split('');
                words.reverse();
                while (padding.length && padding.length < width) {
                    words = words.map(function(word, i) {
                        return (i !== words.length - 1) && padding.length ? padding.shift() + word: word;
                    });
                }
                paddedStr = words.reverse().join(' ');
            }
            break;
        default: // 'left'
            paddedStr = (str + spaces).slice(0, width);
    }
    
    return paddedStr;
};

