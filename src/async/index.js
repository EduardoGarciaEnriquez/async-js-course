const fAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('async stuff')
        }, 2000);
    })
}

const anotherFunction = async () => {
    const call= await fAsync();
    console.log(call);
}

anotherFunction();