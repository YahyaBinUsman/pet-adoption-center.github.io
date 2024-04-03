// DogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import germanImage from '../images/german.jpg'; // Importing the image directly
import dalImage from '../images/dal.jpg';
import bulldogImage from '../images/bulldog.jpg';
import labroImage from '../images/labro.jpg';
import siberImage from '../images/siber.jpg';
import goldenImage from '../images/golden.jpg';

const getImage = (dogName) => {
  switch (dogName) {
    case "German Shepherd":
      return germanImage;
    case "Dalmation":
      return dalImage;
    case "Bulldog":
      return bulldogImage;
    case "Labrador Retriever":
      return labroImage;
    case "Siberian Husky":
      return siberImage;
    case "Golden Retriever":
      return goldenImage;
    default:
      return null;
  }
};

const DogCard = ({ dog }) => {
  const dogImage = getImage(dog.name);

  return (
    <div className="card">
      <img src={dogImage} className="card-img-top" alt={dog.name} style={{ height: '200px', objectFit: 'cover' }} />
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
