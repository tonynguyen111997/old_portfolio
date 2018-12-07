import React from 'react';

const LargeCard = ({ style, onToggleLargeCard, id, img, alt, desc, link }) => {
  return (
    <div className="large-card" style={style}>
      <button onClick={onToggleLargeCard}>
        <p><strong>X</strong></p>
      </button>
        {/* <a href=""><img src={img} alt={alt}/></a> */}
        { link ? 
          <a href={link}>
            <img src={img} alt={alt} />
          </a>
        : 
          <img src={img} alt={alt} />
        }
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default LargeCard;