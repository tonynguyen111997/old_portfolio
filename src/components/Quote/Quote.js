import React from 'react';

import './Quote.scss';

const Quote = ({quoteOpac}) => {
	return (
		<div id="quote-container" className="quote-container" >
			<p id="quote" style={{opacity: quoteOpac}}>"But we do know that for habits to permanently
				change, people must believe that change is feasible."
			</p>
			<p style={{opacity: quoteOpac}}>
			- Charles Duhigg
			</p>
		</div>
	);
}

export default Quote;