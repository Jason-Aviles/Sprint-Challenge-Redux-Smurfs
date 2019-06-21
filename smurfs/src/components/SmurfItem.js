import React from 'react';

const SmurfItem = (props) => {
  const {name,age,height,id}=props.smurf
  console.log(props)
    return (
        <div>
           <h1>{name}</h1>
           <h3>{age}</h3>
           <h4>{height}</h4>
           <p>{id}</p>
        </div>
    );
}

export default SmurfItem;
