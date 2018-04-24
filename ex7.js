// 3 * 6 + 2

let printerFunction = function (result) {
    console.log(result);
};

multiply(3, 6, function (product) {
   add(product, 2, printerFunction);
});

// (1 + 2) * (2 + 3)

add(1, 2, function (sum1) {
    add(2, 3, function (sum2) {
        multiply(sum1, sum2, function (product) {
            console.log(product);
        });
    });
});

function multiply(x, y, callback) {
    callback(x * y);
}

function add(x, y, callback) {
    callback(x + y);
}
