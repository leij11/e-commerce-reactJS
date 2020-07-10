import React, { useEffect, useState } from 'react';
import {Rating } from 'semantic-ui-react';

const ProductDetails = props => {
  return(
    <div className="details">

      <div className="details-image">
        <img src={props.items.image} alt="props"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h2>{props.items.name}</h2>
          </li>
          <li>
            <h5>{props.items.description} </h5>
          </li>
          <li>
            Price: $<b>{props.items.price}</b>
          </li>
          <li >
            <Rating icon='star' defaultRating={2} maxRating={5} disabled size='small'/>
            <h5>(numReviews: {props.items.numReviews} )</h5>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default ProductDetails;
