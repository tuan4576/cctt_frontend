import axiosInstance from "./axios";

const apiShoppingCart = {
    // create
    addToCart: (data, header) => {
        return axiosInstance.post("/shopping-cart", data, header);
    },
    getAll: (header) => {
        return axiosInstance.get("/shopping-cart",header);
    },

    getOne: (id, header) => {
        return axiosInstance.get(`/shopping-cart/${id}`,header);
    }, 

    getCartGuest: (data) => {
        return axiosInstance.get("/shopping-cart/guest",data);
    },

    deleteCartById: (id, header) => {
        return axiosInstance.delete(`/shopping-cart/${id}`, header);
    },

    updateQuantity: (id, data, header) => {
        return axiosInstance.put(`/shopping-cart/${id}`, data, header);
    },

    deleteAllCart: (header) => {
        return axiosInstance.delete(`/shopping-cart`, header);
    },


}

export default apiShoppingCart;



