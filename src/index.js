const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = expr.split('**********');
    let new_array = arr.map(item => {
        let subStr = (xs, s) => xs.length ? [xs.slice(0, s), ...subStr(xs.slice(s), s)] : [];
        let splitItem = item.split('').reverse().join('');
        let subArray = subStr(splitItem, 10).reverse();

        let arr_new = [];
        subArray.forEach(element => {
            element = element.split('').reverse().join('');
            element = element.replace(/11|10/g, str => str === '11' ? '-' : '.');
            element = element.replace(/00|0/g, '');
            arr_new.push(MORSE_TABLE[element]);
        });
        return item = arr_new.join('');
    })
    return new_array.join(' ');
}

module.exports = {
    decode
}