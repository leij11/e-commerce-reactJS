import React, { useState, useContext } from 'react';
import { AuthContext } from '../share/context/auth-context';

const User = props => {
  const auth = useContext(AuthContext);
  //fetch user id 
  return(
      <h1>
        User
      </h1>
  )
}

export default User;
