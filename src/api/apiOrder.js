import axiosInstance from "./axios";

const apiOrder = {
    create: (data, header) => {
        return axiosInstance.post("/product/orders", data, header);
    },
    getOrderById: (orderId) => {
        return axiosInstance.get(`/product/orders/${orderId}`);
    },
    getAll: (header) => {
        return axiosInstance.get("/product/orders", header);
    },
}
export default apiOrder;
