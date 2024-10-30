import axiosInstance from "./axios";

const apiProduct = {

  getMostView: () => {
    return axiosInstance.get("/products");
  },
  getAll: () => {
    return axiosInstance.get("/products?populate=*");
  },
  createProduct: (data) => {
    return axiosInstance.post(`/products`, data)
  },

  deleteProductById: (id) => {
    return axiosInstance.delete(`/products/${id}`);
  },

  getProductPagination: (page, perPage) => {
    return axiosInstance.get(`products?page=${page}&perPage=${perPage}`);
  },

  getOne: (id) => {
    return axiosInstance.get(`/products/${id}`)
  }, 

  getProductById: (id) => {
    return axiosInstance.get(`/products/${id}`);
  },

  getProductByCatId: (catid, page) => {
    return axiosInstance.get(`products/categories/${catid}?page=${page}`);
  },

  getNewestTopSelling: (query) => {
    return axiosInstance.get(`/products/${query}`);
  },


  getProductBySearch: (name) => {
    return axiosInstance.get(`/products/search/${name}`);
  },
  
  editProduct: (id, product) => {
    return axiosInstance.put(`/products/${id}`, product);
  },

    getCategories: () => {
      return axiosInstance.get('/product/categories');  // Fetch all categories
    },
    getProductCategoryId: (id) => {
      return axiosInstance.get(`/product/categories/${id}`);  // Fetch products by category ID
    },
  search: (name) => {
    return axiosInstance.get(`/products/search/${name}`);
  },
  
}

export default apiProduct;