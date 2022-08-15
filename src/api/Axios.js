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

export const updateDataWithToken = async (url, data, token) => {
    return await axios.put(BASEURL + url, data, {
        headers: {
            authorization: "Bearer " + token,
            Accept: 'application/json'
        }
    });
}

export const postFileWithToken = async (url, data, token) => {
    return await axios.post(BASEURL + url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            authorization: "Bearer " + token
        }
    })
}

export const postDataWithToken = async (url, data, token) => {
    return await axios.post(BASEURL + url, data, {
        headers: {
            authorization: "Bearer " + token,
            Accept: 'application/json'
        }
    });
}

export const sendData = async (url, data) => {
    return await axios.post(BASEURL + url, data);
}

export const updateData = async (url, id, data) => {
    return await axios.put(BASEURL + url + "/" + id, data);
}

export const deleteTodo = async (url, {id}) => {
    return await axios.delete(BASEURL + url + "/" + id, id);
}


