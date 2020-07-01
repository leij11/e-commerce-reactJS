import React, { useEffect } from 'react';
import ProductList from '../product/components/ProductList.js'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/product_actions';

const Home = (props) => {
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));
    return ()=>{};
  }, [category]);

  return <ProductList items={products} />;
}
export default Home;
