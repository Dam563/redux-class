// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Retrieve data from local storage if available
// const getStoredCategoryData = () => {
//   const storedCategoryData = localStorage.getItem('categoryData');
//   return storedCategoryData ? JSON.parse(storedCategoryData): [];
// };

// export const fetchCategory = createAsyncThunk('products/Category', async () => {
//   try {
//     const response = await axios.get('https://dummyjson.com/products/categories');
//     const category = response.data;

// // Save the fetched data to local storage
// localStorage.setItem('categoryData', JSON.stringify(category));




//     return category;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw error;
//   }
// });

// const Categoryslice = createSlice({
//   name: 'category',
//   initialState: {
//     items: getStoredCategoryData(),
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategory.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCategory.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchCategory.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default Categoryslice.reducer;


