const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
})

const cows = 9

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`we have ${cows} cows`)
    } else {
        reject('not enough')
    }
})

countCows
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('done'))


export function delay(time, message) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(message)
        }, time)
    })
}