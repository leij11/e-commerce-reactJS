import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import '../product/components/Product.css'
import {Button,Icon} from 'semantic-ui-react'
import ProductDetails from '../product/components/ProductDetails';

const Product = props => {
  const [loadedProduct, setLoadedProduct] = useState({});
  //const productID=useParams().id;
  const productID = props.match.params.id ? props.match.params.id : '';
  useEffect(() => {
    const fetchProduct = async () => {
      const {data}=await axios.get(process.env.REACT_APP_BACKEND_URL+"/product/"+productID);
      setLoadedProduct(data);
    };
    fetchProduct();
    return ()=>{};
  }, []);
  const product=loadedProduct

  const handleAddToCart = () => {
  props.history.push('/cart/' + productID);
};

const backHandler= () => {
  props.history.push("/");
}
  return(
    <React.Fragment>
    <div className='detail-button'>
      <Button animated  onClick={backHandler}>
        <Button.Content visible>
            Back
        </Button.Content>
        <Button.Content hidden>
          <Icon name='arrow left' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick={handleAddToCart} >
        <Button.Content visible>
        <Icon name='shop' />
          Add to Cart
        </Button.Content>
        <Button.Content hidden>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    </div>

    <ProductDetails items={product} productID />;
  </React.Fragment>
  )


}
export default Product
