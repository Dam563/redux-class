import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

// Retrieve data from local storage if available
const getStoredData = () => {
  const storedData = localStorage.getItem("productData");
  return storedData ? JSON.parse(storedData) : [];
  
};

// const { id } = useParams();

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data;

      // Save the fetched data to local storage
      localStorage.setItem("productData", JSON.stringify(products));

      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const fetchProductsId = createAsyncThunk(
  "products/fetchProductsId",
  async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const products = response.data;

      // Save the fetched data to local storage
      localStorage.setItem("productData", JSON.stringify(products));
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (productData) => {
    try {
      const response = await axios.post('https://dummyjson.com/products/add', 
      productData
// headers, { 'Content-Type': 'application/json' },
// body, JSON.stringify({
//   title: 'BMW Pencil',
// })
      );
      const addedProducts = response.data;
      console.log(addedProducts);

      // Save the fetched data to local storage
      localStorage.setItem("productData", JSON.stringify(addedProducts));
      return addedProducts;
    } catch (error) {
      console.error("Error adding products:", error);
      throw error;
    }
  }
);


const Productslice = createSlice({
  name: "products",
  initialState: {
    items: getStoredData(),
    status: "idle",
    error: null,
    itemsById: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      builder
      .addCase(fetchProductsId.pending, (state) =>{
        state.status ='loading';
      })
      .addCase(fetchProductsId.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload;
      })
      .addCase(fetchProductsId.rejected, (state, action) => {
        state.status ='failed'
        state.error = action.error.message;
      });

      builder
      .addCase(addProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.products = [...state.items.products, action.payload];
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Productslice.reducer;
