import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/';

async function fetchData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const asyncFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}products`);
        const firstProduct = await fetchData(`${urlApi}products/${products[0].id}`);
        const category = await fetchData(`${urlApi}categories/${firstProduct.category.id}`)

        console.info(firstProduct);
        console.info(category);
    } catch (error) {
        console.log(error)
    }
}

asyncFunction(API);