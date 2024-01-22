import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRatingStyle.css';

const StarRating = () => {
  const [rating, setRating] = useState(
    JSON.parse(localStorage.getItem('savedRating')) || null
  );

  const saveRating = (ratingValue) => {
    localStorage.setItem('savedRating', JSON.stringify(ratingValue));
    setRating(ratingValue);
  };

  const handleClick = (ratingValue) => {
    if (ratingValue === rating) {
      saveRating(null);
    } else {
      saveRating(ratingValue);
    }
  };
// Звездочки из react-icon (Установила) 
//  ...Array(5) умножает инпуты (массив в объекте)
  return (
    <div className="StarRating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input 
              type="radio" 
              name="rating" 
              className="inputRadio" 
              value={ratingValue} 
              style={{ display: 'none' }} 
            />
            <FaStar 
              className="star" 
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              size={20}
              onClick={() => handleClick(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
};
export default StarRating

