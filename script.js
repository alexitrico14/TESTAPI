const baseUrl = 'https://jsonplaceholder.typicode.com';

const request = async (url) => {
    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    return respuesta;
};

const getPosts = async (id) => {
    //https://jsonplaceholder.typicode.com/posts?userId=1
    const url = `${baseUrl}/posts?userId=${id}`;
    return await request(url);
};

const getUser = async (id) => {
    const url = `${baseUrl}/users/${id}`;
    return await request(url);
};

const userId = 1;

Promise.all([getUser(userId),getPosts(userId)]).then(
    resp => {
        console.log("Respuesta: ",resp);
    }
).catch(
    error => {
        console.log("Error: ",error);
    }
);