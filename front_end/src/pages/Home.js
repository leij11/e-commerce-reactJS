import React, { useEffect, useState } from 'react';
import ProductList from '../product/components/ProductList.js'
import axios from 'axios';
import ErrorModal from '../share/UIElements/ErrorModal';
import LoadingSpinner from '../share/UIElements/LoadingSpinner';
import { useHttpClient } from '../share/hooks/http-hook';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/product_actions';

const Home = (props) => {
  //const [loadedProduct, setLoadedProduct] = useState([]);
  //const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  //const category = props.match.params.id ? props.match.params.id : '';
  useEffect(() => {
    /*
    const fetchProduct = async () => {
      const {data}=await axios.get("api/product");
      setLoadedProduct(data);
    };
    fetchProduct();
    */
    dispatch(listProducts());
    return ()=>{};
  }, []);

  return <ProductList items={products} />;
}
export default Home;
