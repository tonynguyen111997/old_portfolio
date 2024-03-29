import React from 'react';

import './NavBar.scss';

import NavButton from './NavButton/NavButton';

const NavBar = ({ handleScrollToElement }) => {
	return(
		<div className="nav">
			<nav className="nav-bar">
				<div className="title">
					<h1>Tony Nguyen</h1>
				</div>
				<div className="nav-button-list">
					<NavButton name="Home" onClick={() => {handleScrollToElement("quote-container")}}/>
					<NavButton name="About Me" onClick={() => {handleScrollToElement("about-me-container")}}/>
					<NavButton name="Portfolio" onClick={() => {handleScrollToElement("portfolio-container")}}/>
					<NavButton name="Skills" onClick={() => {handleScrollToElement("skills-container")}}/>
					<NavButton name="Resume" onClick={() => window.open('https://github.com/tonynguyen111997/portfolio/files/3100946/Tony_Nguyen_Resume.pdf')}/>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;