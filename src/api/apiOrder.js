import axiosInstance from "./axios";

const apiOrder = {
    create: (data, header) => {
        return axiosInstance.post("/product/orders", data, header);
    },

}

export default apiOrder;