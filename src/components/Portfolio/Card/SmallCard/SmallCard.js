import React from 'react';

const SmallCard = ({ btnStyle, onToggleLargeCard, id, img, alt, desc}) => {
  return(
    <div id={id} className="card">
      <img src={img} alt={alt}/>
      <p className="small-card-info">{desc}</p>
      <button id="btn-more" className="btn-more" style={btnStyle} onClick={onToggleLargeCard}>
        <p>More Info</p>
      </button>
    </div>
  );
}

export default SmallCard;