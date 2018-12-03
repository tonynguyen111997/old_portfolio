import React from 'react';

const LargeCard = ({ style, onToggleLargeCard, id, img, alt }) => {
  return (
    <div className="large-card" style={style}>
      <button onClick={onToggleLargeCard}>
        <p><strong>X</strong></p>
      </button>
      <img src={img} alt={alt}/>
      <div>
        <p>Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
        Etiam magna ligula, ultricies pharetra mauris quis. {id} </p>
      </div>
    </div>
  );
};

export default LargeCard;