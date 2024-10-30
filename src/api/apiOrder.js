import axiosInstance from "./axios";

const apiOrder = {
    create: (data, header) => {
        return axiosInstance.post("/product/orders", data, header);
    },
    getOrderById: (orderId) => {
        return axiosInstance.get(`/product/orders/${orderId}`);
    },
    // getAll: (header) => {
    //     return axiosInstance.get("/product/orders", header);
    // },
    getOrderHistory: (header) => {
        return axiosInstance.get("/product/orders", header);
    },
    getOrderDetails: (header) => {
        return axiosInstance.get(`/product/orders/details`, header);
    },
}
export default apiOrder;
