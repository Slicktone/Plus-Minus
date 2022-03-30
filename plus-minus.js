'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    //defining variables
    const n = arr.length;
    let [pos, neg, zero] = [0, 0, 0];
    //open iteration
    if (n !== 0) {
        arr.array.forEach(i => {
            i > 0 ? pos++ : i < 0 ? neg++ : zero++;
        });
        //print results of numbers positive, negative, and zero
        console.log((pos/n).toFixed(6));
        console.log((neg/n).toFixed(6));
        console.log((zero/n).toFixed(6));
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
