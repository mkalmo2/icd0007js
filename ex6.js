
let printerFunction = function (result) {
    console.log(result);
};

factorial(5, printerFunction);

function factorial(n, myCallback) {
    if (n < 0) {
        throw 'illegal argument'
    }

    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }

    myCallback(result);
}
