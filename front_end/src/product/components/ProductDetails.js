import React, { useEffect, useState } from 'react';

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
            {props.items.description}
          </li>
        </ul>
      </div>
      </div>
  )
}

export default ProductDetails;
