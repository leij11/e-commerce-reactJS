import React, { useEffect, useState } from 'react';
import ProductList from './product/components/ProductList.js'

import ErrorModal from './share/UIElements/ErrorModal';
import LoadingSpinner from './share/UIElements/LoadingSpinner';
import { useHttpClient } from './share/hooks/http-hook';

const Home = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+`/product`
        );
        setLoadedProduct(responseData.product);
      } catch (err) {}
    };
    fetchProduct();
  }, [sendRequest]);

console.log(loadedProduct)
  return <ProductList items={loadedProduct} />;
}

export default Home;
