import React from 'react';
import ProductList from '../components/ProductList.js'
//import LoadingSpinner from '../../share/UIElements/LoadingSpinner';
import {useParams} from 'react-router-dom'
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

const Product = () => {
  const category=useParams().category;
  //console.log(category)
  const loadedCategory=DUMMY_PRODUCT.filter(product=>product.category===category)
  return <ProductList items={loadedCategory} />;

}

export default Product;
