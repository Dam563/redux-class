import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts , addProducts} from '../redux/slice/Productslice';
import { Link } from 'react-router-dom';
import './productpage.css';

const ProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    const[addProductTitle, setAddProductTitle] = useState('')
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchProducts());
      }
    }, [dispatch, status]);
  

    const handleAddProduct = async(e) => {
      e.preventDefault();
      try{
        await dispatch(addProducts({ title : addProductTitle}));
        setAddProductTitle('');
      }catch (error) {
        console.error('Error adding product:', error);
      }
    };


    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
  console.log(products)

    return (
      <div>
        <h1>Redux Toolkit App</h1>
        <ul>
          {products.products?.map((product) => (
            <li key={product.id}>
            <Link to={`/product/${product.id}`} id="product-list">{product.title}</Link>
          </li>
            // <Link to>
            // <li key={product.id} value={product.id}>{product.title}</li>
            // </Link>
          ))}
        </ul>
        <form onSubmit={handleAddProduct}> 
          <input type="text" placeholder='Add Product Title' value={addProductTitle} onChange={(e) => setAddProductTitle(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )}


    export default ProductPage;