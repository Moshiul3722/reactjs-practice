import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
  const data = useContext(UserContext);

  console.log(data);

  return (
    <div>
        <h1>Component-04</h1>
        <p>{data.id}</p>
        <p>{data.name}</p>
    </div>
  )
}

export default Component4