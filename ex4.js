personList = [
    {
        name: 'Jack',
        phones: [123, 456]
    },
    {
        name: 'Jill',
        phones: [789]
    },
    {
        name: 'Jane',
        phones: [234, 567, 675]
    },
];

console.log(findByPhoneNumber(personList, 567));

function findByPhoneNumber(personList, phoneToBeFound) {

    let found = [];
    for (let person of personList) {
        for (let phone of person.phones) {
            if (phone === phoneToBeFound) {
                found.push(person);
            }
        }
    }

    return found;
}