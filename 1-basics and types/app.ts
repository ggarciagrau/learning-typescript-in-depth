function add(n1: number, n2: number) {

    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw new Error('Incorrect input')
    }
    return n1 + n2;
}

const number1 = '3';
const number2 = 7.1;

const result = add(number1, number2);

console.log('Result', result)