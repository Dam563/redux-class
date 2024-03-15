// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategory } from '../redux/slice/Categoryslice';

// const CategoryPage = () => {
//     const dispatch = useDispatch();
//     const category = useSelector((state) => state.category.items);
//     const status = useSelector((state) => state.category.status);
//     const error = useSelector((state) => state.category.error);
  
//     useEffect(() => {
//       if (status === 'idle') {
//         dispatch(fetchCategory());
//       }
//     }, [dispatch, status]);
  
//     if (status === 'loading') {
//       return <div>Loading...</div>;
//     }
  
//     if (status === 'failed') {
//       return <div>Error: {error}</div>;
//     }
//   console.log(category)
//     return (
//       <div>
//         <h1>Redux Toolkit App</h1>
//         <ul>
//           {category?.map((category) => (
//             <li value={category} key={category}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}</li>
//           ))}
//         </ul>
//       </div>

// )}


// export default CategoryPage;