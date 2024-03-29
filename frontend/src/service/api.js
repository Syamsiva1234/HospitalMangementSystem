import axios from 'axios';
// const axios = require('axios');


const url = "http://127.0.0.1:5000/patients";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url, user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}