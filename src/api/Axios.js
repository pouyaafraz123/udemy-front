import axios from "axios";

const BASEURL = "https://udemy.myter.ir/api/v1";


export const getData = async (url) => {
    const response = await axios.get(BASEURL + url);
    return response.data;
}

export const getDataWithToken = async (url, token) => {
    const response = await axios.get(BASEURL + url, {
        headers: {
            authorization: "Bearer " + token
        }
    });
    return response.data;
}

export const sendData = async (url, data) => {
    return await axios.post(BASEURL + url, data);
}

export const updateData = async (url, id, todo) => {
    return await axios.patch(BASEURL + url + "/" + id, todo);
}

export const deleteTodo = async (url, {id}) => {
    return await axios.delete(BASEURL + url + "/" + id, id);
}


