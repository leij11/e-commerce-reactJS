import React, { useEffect, useState } from 'react';
import ProductList from '../product/components/ProductList.js'
import axios from 'axios';
import ErrorModal from '../share/UIElements/ErrorModal';
import LoadingSpinner from '../share/UIElements/LoadingSpinner';
import { useHttpClient } from '../share/hooks/http-hook';

const Home = props => {
  const [loadedProduct, setLoadedProduct] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchProduct = async () => {
      const {data}=await axios.get("api/product");
      setLoadedProduct(data);
    };
    fetchProduct();
    return ()=>{};
  }, []);

  return <ProductList items={loadedProduct} />;
}
export default Home;
