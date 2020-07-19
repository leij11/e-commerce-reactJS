import React, { useEffect, useState } from 'react';
import { Card,Image } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'

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
            <h3>Price : $<b>{props.items.price}</b></h3>
          </li>
          <li>
            <h5>Color: {props.items.color}</h5>
          </li>
          <li>
            Brand : {props.items.brand}
          </li>
          <li>
            Description: {props.items.description}
          </li>
          <li>
            Product ID : {props.items._id}
          </li>

        </ul>
      </div>
      </div>
  )

}

export default ProductDetails;
