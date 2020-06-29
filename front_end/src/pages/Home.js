import React, { useEffect, useState } from 'react';
import ProductList from '../product/components/ProductList.js'
import axios from 'axios';
import ErrorModal from '../share/UIElements/ErrorModal';
import LoadingSpinner from '../share/UIElements/LoadingSpinner';
import { useHttpClient } from '../share/hooks/http-hook';

const Home = props => {
  const [loadedProduct, setLoadedProduct] = useState([]);
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
    name: 'Take out pants',
    brand: 'OakleyAFA',
    image:
      'https://assets.oakley.com/is/image/OakleyAFA/190645229550_take-pro-pant_miscassorted_main_001.png?impolicy=OO_zoom',
    category: 'pants',
    price: '$78',
    rating: '5'
  },
  {
    id: 'p4',
    name: 'Black Jeans',
    brand: 'OakleyAFA',
    image:
      'https://assets.oakley.com/is/image/OakleyAFA/190645522811_take-pro-pant_blackout_main_001.png',
    category: 'pants',
    price: '$56',
    rating: '3.5'
  }
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      const {data}=await axios.get("api/product");
      setLoadedProduct(data);
    };
    fetchProduct();
    return ()=>{};
  }, []);

console.log(loadedProduct)
//return (
//  loadedProduct
//)
  return <ProductList items={loadedProduct} />;
}
/*
  return <ProductList items={DUMMY_PRODUCT} />
}
*/
export default Home;
