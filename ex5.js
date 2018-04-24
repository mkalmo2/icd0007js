let person = {
    name: 'Jack',
    phones: [123, 456]
};

let string = JSON.stringify(person);

console.log(string);

console.log(JSON.parse(string));
