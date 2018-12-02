import React from 'react';

const SmallCard = ({ btnStyle, onToggleLargeCard, id, img, alt}) => {
  return(
    <div id={id} className="card">
      <img src={img} alt={alt}/>
      <p className="small-card-info">Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
        Etiam magna ligula, ultricies pharetra mauris quis.</p>
      <button id="btn-more" className="btn-more" style={btnStyle} onClick={onToggleLargeCard}>
        <p>More Info</p>
      </button>
    </div>
  );
}

export default SmallCard;