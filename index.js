module.exports = function stringPad(str, width, align) {
    var spaces = (new Array(width + 1)).join(' ');
    var paddedStr = '';
    var right;
    var left;
    var words;
    var padding;
    
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
        words = str.split(' ');
        if (words.length < 2) {
            paddedStr = (spaces).slice(0, width);
        }
        else {
            padding = spaces.slice(0, width - str.length).split('');
            while (padding.length && padding.length < width) {
                words = words.map(function(word, i) {
                    return i && padding.length ? padding.shift() + word : word;
                });
            }
            paddedStr = words.join(' ');
        }
        break;
    default: // 'left'
        paddedStr = (str + spaces).slice(0, Math.max(str.length, width));
    }
    
    return paddedStr;
};


