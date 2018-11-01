import React from 'react';

import './Portfolio.css';

import Card from './Card/Card';

const Portfolio = ({portfolioOpac}) => {
	return (
		<div id="portfolio-container" className="portfolio">
			<h2 id="portfolio" style={{opacity: portfolioOpac}}>Portfolio</h2>
			<div className="card-container" style={{opacity: portfolioOpac}}>
				<Card id="card1" img="https://via.placeholder.com/350x150"/>
				<Card id="card2" img="https://via.placeholder.com/350x150"/>
				<Card id="card3" img="https://via.placeholder.com/350x150"/>
				<Card id="card4" img="https://via.placeholder.com/350x150"/>
				<Card id="card5" img="https://via.placeholder.com/350x150"/>
				<Card id="card6" img="https://via.placeholder.com/350x150"/>
				<Card id="card7" img="https://via.placeholder.com/350x150"/>
			</div>
		</div>
	);
}

export default Portfolio;