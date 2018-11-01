import React, { Component } from 'react';

import './NavBar.css';

import NavButton from './NavButton/NavButton';

class NavBar extends Component{
	handleScrollToElement = (id) => {
		const elem = document.getElementById(id);
		elem.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}

	render(){
		return(
			<div className="nav">
				<nav className="nav-bar">
					<div className="title">
						<h1>Tony Nguyen</h1>
					</div>
					<div className="nav-button-list">
						<NavButton name="Home" onClick={() => {this.handleScrollToElement("quote-container")}}/>
						<NavButton name="About Me" onClick={() => {this.handleScrollToElement("about-me-container")}}/>
						<NavButton name="Portfolio" onClick={() => {this.handleScrollToElement("portfolio-container")}}/>
						<NavButton name="Skills" onClick={() => {this.handleScrollToElement("skills-container")}}/>
						<NavButton name="Resume" />
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;