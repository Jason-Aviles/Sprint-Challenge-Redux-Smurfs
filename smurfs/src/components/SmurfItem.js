import React from 'react';
import DeleteButton from './DeleteButton '
import EditSmurf from '../components/EditSmurfs'
import {Route ,Link}  from 'react-router-dom'
const SmurfItem = (props) => {
  const {name,age,height,id}=props.smurf
  console.log(props)
    return (
        <div>
           <h1>{name}</h1>
           <h3>{age}</h3>
           <h4>{height}</h4>
           <p>{id}</p>
           <DeleteButton smurfIds={id}/>
           <Link to={`/smurfs/${id}`}>Edit</Link>
           <Route path='/smurfs/:id ' render={()=> <EditSmurf {...props} smurfs={props.smurf}/>} />
           
        </div>
    );
}

export default SmurfItem;
