import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsId } from "../redux/slice/Productslice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsId(id));
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log(products);

  return (
    <div>
      <h3>Product Details</h3>
      {products && (
        <div>
          <p>{products.id}</p>
          <p>{products.title}</p>
          <p>{products.brand}</p>
          <p>{products.category}</p>
          <p>{products.description}</p>
          <img src={products.thumbnail} alt="" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
