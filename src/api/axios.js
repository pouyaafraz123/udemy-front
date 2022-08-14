import axios from "axios";

const instance = axios.create({
    baseURL: "https://udemy.myter.ir/api/v1"
});

export const getData = async (url) => {
    const response = await instance.get("/" + url);
    return response.data;
}

export const sendData = async (url, data) => {
    return await instance.post("/" + url, data);
}

export const updateData = async (url, id, todo) => {
    return await instance.patch("/" + url + "/" + id, todo);
}

export const deleteTodo = async (url, {id}) => {
    return await instance.delete("/" + url + "/" + id, id);
}

export default instance;