numbers = [1, 2, '3', 6, 2, 3, 2, 3];

console.log(isInList(numbers, 2));
console.log(isInList(numbers, 9));

function isInList(list, needle) {
    for (let each of list) {
        if (each === needle) {
            return true;
        }
    }

    return false;
}