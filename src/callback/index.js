function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, op) {
    return op(num1, num2)
}

console.log(calc(1, 5, sum));

setTimeout(() => {
    console.log('hola')
}, 2000);

function greetin(name) {
    console.log(`Hola, ${name}`)
}

setTimeout(greetin, 2000, 'Oswald');