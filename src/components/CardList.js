import * as React from 'react';
import Card from './Card'; 

const CardList = (props) => (
  <div className="card-list">
    {props.profiles.map(profile => <Card {...profile}/>)}    
  </div> 
)

export default CardList; 