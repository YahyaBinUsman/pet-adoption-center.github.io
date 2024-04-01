// Dogs.js
import React, { useState } from 'react';
import DogCard from './DogCard';
import dogData from './dogs-data.json'; // Import the JSON data

const Dogs = () => {
  const [dogsData] = useState(dogData);

  return (
    <div>
      <h2>Available Dogs</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dogsData.map((dog) => (
          <div key={dog.id} className="col mb-4">
            <DogCard dog={dog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
