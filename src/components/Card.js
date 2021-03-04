import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';
import data from '../atlas-of-remote-islands.js';

function Card(props) {
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage />
            <CardInfo name = {props.name}
                      description = {props.description}
                      image = {props.image}
                      lantitude = {props.coords.lat}
                      longitude = {props.coords.lon}/>
        </div>
      </div>
    </li>
  );
}

export default Card;
