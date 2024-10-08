import axiosInstance from "./axios";
import { AxiosResponse } from 'axios';
const apiUser = {
    // create user
    createUser: (data) =>{
        return axiosInstance.post("/register", data);
    },

    loginUser: (data) =>{
        return axiosInstance.post("/login", data);
    },

    getOne: (id) => {
        return axiosInstance.get(`/users/${id}?populate=*`);
    },

    getAll: () => {
        return axiosInstance.get("/users?populate=*");
    },

    getAuth: (header) => {
        return axiosInstance.get("/auth", header);
    },
    updateUserImage: (imageData) => {
        const formData = new FormData();
        formData.append('photo', imageData);
        return axiosInstance.post(`/users/photo`, formData);
    },
    // updateUserImage: (imageData) => {
    //     const formData = new FormData();
    //     formData.append('photo', imageData);
    //     return axiosInstance.post(`/users/photo`, formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     });
    // },

    updateUserBackground: (backgroundData) => {
        return axiosInstance.post(`/users/background`, backgroundData);
    },
}

export default apiUser;