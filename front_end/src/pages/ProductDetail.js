import React from 'react';
import {useParams} from 'react-router-dom'
import './ProductDetail.css'
import {Button,Icon,Divider, Grid, Image, Segment } from 'semantic-ui-react'

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

const ProductDetail = props => {
  const productID=useParams().id;
  const products=DUMMY_PRODUCT.filter(product=>product.id===productID)
  const product=products[0]
  return(
    <React.Fragment>
    <div className='detail-button'>
      <Button animated  >
        <Button.Content visible>Back</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow left' />
        </Button.Content>
      </Button>
      <Button animated='vertical' primary >
        <Button.Content visible>Add to Cart</Button.Content>
        <Button.Content hidden>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    </div>

    <div className="details">

      <div className="details-image">
        <img src={product.image} alt="product"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>

          <li>
            Price: <b>{product.price}</b>
          </li>

        </ul>
      </div>
      </div>
  </React.Fragment>
  )


}
export default ProductDetail
