import React, { useEffect, useState } from 'react';
import ProductList from '../product/components/ProductList.js'
import axios from 'axios';
import ErrorModal from '../share/UIElements/ErrorModal';
import LoadingSpinner from '../share/UIElements/LoadingSpinner';
import { useHttpClient } from '../share/hooks/http-hook';

const Home = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const DUMMY_PRODUCT = [
  {
    id: 'p1',
    name: 'Cut off dress',
    brand: 'Shein',
    image:
      'https://img.ltwebstatic.com/images2_pi/2018/04/18/1524050624978008600.webp',
    category: 'top',
    price: '$48.3',
    rating: '4'
  },
  {
    id: 'p2',
    name: 'Cut off dress',
    brand: 'Zara',
    image:
      'https://img.ltwebstatic.com/images2_pi/2018/04/18/1524050624978008600.webp',
    category: 'top',
    price: '$48',
    rating: '3'
  },
  {
    id: 'p3',
    name: 'Cut off dress',
    brand: 'Zara',
    image:
      'https://img.ltwebstatic.com/images2_pi/2018/04/18/1524050624978008600.webp',
    category: 'pants',
    price: '$48',
    rating: '3'
  },
  {
    id: 'p4',
    name: 'Cut off dress',
    brand: 'Zara',
    image:
      'https://img.ltwebstatic.com/images2_pi/2018/04/18/1524050624978008600.webp',
    category: 'pants',
    price: '$48',
    rating: '3'
  }
  ];
/*
  useEffect(() => {
    const fetchProduct = async () => {
      const {data}=await axios.get('http://localhost:5000/api/product');
      setLoadedProduct(data);
    };
    fetchProduct();
    return ()=>{};
  }, []);

console.log(loadedProduct)
  return <ProductList items={loadedProduct} />;
}
*/
  return <ProductList items={DUMMY_PRODUCT} />
}

export default Home;
