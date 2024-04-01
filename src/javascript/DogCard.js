// DogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ dog }) => {
  return (
    <div className="card">
      <img src={dog.image} className="card-img-top" alt={dog.name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{dog.name}</h5>
        <p className="card-text">{dog.description}</p>
        <Link to={`/checkout/${dog.id}`} className="btn btn-primary">
          Adopt Me
        </Link>
      </div>
    </div>
  );
};

export default DogCard;
