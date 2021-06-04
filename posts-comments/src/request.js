
const sendRequest = (method, url, body=null) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    if(method==='POST'){
        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        })
            .then(response=>response.json())
    }else{
        return fetch(url)
            .then(response=>response.ok ? response.json() : response.json().then(error=>console.log(error)))
            .catch(error=>console.error(error))
    }
    
}

export default sendRequest;