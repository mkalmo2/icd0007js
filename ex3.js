numbers = [1, 2, 5, 6, 2, 11, 2, 7];

console.log(getOddNumbers(numbers));

function getOddNumbers(numbers) {

    let oddNumbers = [];
    for (let each of numbers) {
        if (each % 2 === 1) {
            oddNumbers.push(each);
        }
    }

    return oddNumbers;
}