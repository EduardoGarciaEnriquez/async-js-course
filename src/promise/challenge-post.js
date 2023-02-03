import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1/';

function postData(url, data) {
    const response = fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "Lalins product",
    "price": 10,
    "description": "A diez pesiño",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))