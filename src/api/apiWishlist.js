import axiosInstance from "./axios";

const apiWishlist = {
    // create
    addToWishlist: (data, header) => {
        return axiosInstance.post("/products/wishlist", data, header);
    },

    getWishListByPagination: (page, header) => {
        return axiosInstance.get(`/product/wishlist?page=${page}`, header);
    },

    getAll: (header) => {
        return axiosInstance.get(`/product/wishlist`, header);
    },

    deleteWishListById: (id, header) => {
        return axiosInstance.delete(`/product/wishlist/${id}`, header);
    },

    getMostLikedProduct: (header) => {
        return axiosInstance.get(`/product/wishlist/most-liked`, header);
    },
}

export default apiWishlist;