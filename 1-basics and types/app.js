function add(n1, n2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw new Error('Incorrect input');
    }
    return n1 + n2;
}
var number1 = '3';
var number2 = 7.1;
var result = add(number1, number2);
console.log('Result', result);
