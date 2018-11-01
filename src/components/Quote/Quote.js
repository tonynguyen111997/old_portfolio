import React from 'react';

import './Quote.css';

const Quote = ({quoteOpac}) => {
	return (
		<div id="quote-container" className="quote-container" >
			<p id="quote" style={{opacity: quoteOpac}}>Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
				Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
				Etiam magna ligula, ultricies pharetra mauris quis.
			</p>
		</div>
	);
}

export default Quote;