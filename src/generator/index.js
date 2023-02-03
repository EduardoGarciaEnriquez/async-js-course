function* iterator(array) {
    for (let value of array) {
        yield value;
    }
}

const iterate = iterator(['juan', 'pablo', 'mary']);

console.log(iterate.next().value)
console.log(iterate.next().value)
console.log(iterate.next().value)
console.log(iterate.next().value)