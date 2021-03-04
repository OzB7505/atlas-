import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <div className="card-image">{props.img}</div>
  );
}

export default CardImage;