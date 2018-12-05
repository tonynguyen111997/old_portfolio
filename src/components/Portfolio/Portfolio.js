import React from 'react';

import './Portfolio.css';

import Card from './Card/Card';

const Portfolio = ({portfolioOpac}) => {
	return (
		<div id="portfolio-container" className="portfolio">
			<h2 id="portfolio" style={{opacity: portfolioOpac}}>Portfolio</h2>
			<div className="card-container" style={{opacity: portfolioOpac}}>
				<Card id="card1" img="https://via.placeholder.com/350x150" alt="placeholder"/>
				<Card id="card2" img="https://via.placeholder.com/350x150" alt="placeholder"/>
			</div>
		</div>
	);
}

export default Portfolio;