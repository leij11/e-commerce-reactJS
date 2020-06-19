import React from 'react';
import ProductList from '../components/ProductList.js'

const DUMMY_Product = [
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
  category: 'jacket',
  price: '$48',
  rating: '3'
},
{
  id: 'p3',
  name: 'Cut off dress',
  brand: 'Zara',
  image:
    'https://img.ltwebstatic.com/images2_pi/2018/04/18/1524050624978008600.webp',
  category: 'jacket',
  price: '$48',
  rating: '3'
},
{
  id: 'p4',
  name: 'Cut off dress',
  brand: 'Zara',
  image:
    'https://img.ltwebstatic.com/images2_pi/2018/04/18/1524050624978008600.webp',
  category: 'jacket',
  price: '$48',
  rating: '3'
}
];

const Product = () => {
  return <ProductList items={DUMMY_Product} />;
}

export default Product;
