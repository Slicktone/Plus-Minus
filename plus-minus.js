function plusMinus(arr) {
    //defining variables
    const n = arr.length;
    let [pos, neg, zero] = [0, 0, 0];
    //open iteration
    if (n !== 0) {
        arr.forEach(i => {
            i > 0 ? pos++ : i < 0 ? neg++ : zero++;
        });
        //print results of numbers positive, negative, and zero
        console.log((pos/n).toFixed(6));
        console.log((neg/n).toFixed(6));
        console.log((zero/n).toFixed(6));
    }

}