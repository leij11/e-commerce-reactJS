import React, { useEffect, useState } from 'react';
import { Card,Image, Rating } from 'semantic-ui-react';

const ProductDetails = props => {
  return(
    <div className="details">

      <div className="details-image">
        <img src={props.items.image} alt="props"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h3>{props.items.name}</h3>
          </li>
          <li>
            <h3>Price: $<b>{props.items.price}</b></h3>
          </li>
          <li>
            <Rating icon='star' defaultRating={3} maxRating={5} disabled size='small'/>
          </li>
          <li>
            {props.items.description}
          </li>

        </ul>
      </div>
      </div>
  )
}

export default ProductDetails;
