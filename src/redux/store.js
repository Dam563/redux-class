
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/Categoryslice'
import productReducer from './slice/Productslice'

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// const store = configureStore({
//   reducer: {
//     category: categoryReducer,
//   },
// });

export default store;