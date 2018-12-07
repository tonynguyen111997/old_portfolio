import React from 'react';

import './Portfolio.css';

//portfolio imgs
import fccImg from '../../public/portfolio/fcc_riverside.png';
import smilurImg from '../../public/portfolio/smilur.png';
import simonImg from '../../public/portfolio/simon_game.png';
import tictactoeImg from '../../public/portfolio/tic_tac_toe_game.png';
import calculatorImg from '../../public/portfolio/calculator_app.png';
import wikiViewerImg from '../../public/portfolio/wiki_viewer.png';
import weatherImg from '../../public/portfolio/weather_forecast.png';

import Card from './Card/Card';

const Portfolio = ({portfolioOpac}) => {
	return (
		<div id="portfolio-container" className="portfolio">
			<h2 id="portfolio" style={{opacity: portfolioOpac}}>Portfolio</h2>
			<div className="card-container" style={{opacity: portfolioOpac}}>
				<Card id="card1" img={fccImg} alt="free code camp riverside github" 
					link="https://github.com/zootechdrum/Free_Code_Camp_Riverside"
					smallDesc="An ongoing team project for the freeCodeCamp Riverside website. "
					largeDesc="This website is being developed in hopes to connect new and aspiring programmers
										within the Riverside and Inland Empire area. The website will provide new programmers with
										resources on learning to program and a community to interact with. Working on this project has provided
										me with an environment which requires team coordination and communication. My current
										contributions to the website has been the navigation bar and the GitHub readme document.
										To view the GitHub page for this website click on the image."/>
				<Card id="card2" img={smilurImg} alt="free code camp riverside github" 
					smallDesc="A social media Android app being developed by a small group."
					largeDesc="Social media Android app that is currently under development. Currently I am
										collaborating with one other developer and a designer to create a social media
										app. As of right now the app is only compatible for Android devices, but in the
										future we hope to expand onto iOS. My main role in the development of this app is
										back-end development. The app communicates with a Node.js/Express.js server to retrieve 
										data from a database that uses PostgreSQL. Although my role consist mostly of 
										back-end development, I occasionally work with my team on the front-end using Java 
										and Android Studio."/>
				<Card id="card3" img={simonImg} alt="simon game" 
					link="https://codepen.io/Tonynguyen111997/full/wjowzW"
					smallDesc="Simon game developed using HTML, CSS and Javascript. "
					largeDesc="A Simon game developed for a freeCodeCamp.org project. The project
										was developed to further practice my HTML, CSS and Javascript skills.
										This project allowed me to practice integrating sounds into web apps.
										The design of this game was inspired by the classic Nintendo Gameboy. The game
										is fully functional, and the rules for the game is to simply click
										the colored button in the same order that is flashed. Each colored 
										button has its own distinct sound, which was provided by freeCodeCamp.
										This project was developed before I learned about the ECMAScript 6 syntax.
										To view the code, click on the link and press change view. "/>
				<Card id="card4" img={tictactoeImg} alt="tic tac toe" 
						link="https://codepen.io/Tonynguyen111997/full/QrbogG"
						smallDesc="Tic Tac Toe game developed using HTML, CSS and Javascript."
						largeDesc="A solo project developed as part of the freeCodeCamp.org curriculum.
											Implementing the functionalities of the game provided me the opportunity
											to practice my Javascript knowledge. 
											This game allows up to two players. The player will play against
											a CPU if played alone. The game functions just like how a normal
											tic tac toe game. This project was made using HTML, CSS and Javascript."/>
				<Card id="card5" img={calculatorImg} alt="calculator app" 
						link="https://codepen.io/Tonynguyen111997/full/EEpQpB"
						smallDesc="A calculator app on CodePen that was developed using HTML, CSS and Javascript."
						largeDesc="Calculator app that functions just like a normal calculator. While developing
											 calculator, the app presented a lot of edge cases. This app provided an environment
											 in which I could practice my critical thinking skills, because of the many edge
											 cases that had to be covered. HTML, CSS and Javascript was used to create the 
											 calculator. "/>
				<Card id="card6" img={wikiViewerImg} alt="wiki viewer app" 
						link="https://codepen.io/Tonynguyen111997/full/gvNWNa"
						smallDesc="A simple app that searches Wikipedia for what the user inputs."
						largeDesc="The Wikipedia app uses XMLHttpRequests to fetch JSON data from Wikipedia.
											 This app helped me gain a better understanding of how websites and 
											 web apps communicate. The app initially starts off with two buttons, a 
											 search and random button. The search button opens a search bar for the user to
											 type and retrieve information from Wikipedia. The random button opens a new window
											 that provides the user with random information found on Wikipedia."/>
				<Card id="card7" img={weatherImg} alt="weather forecast app" 
						link="https://codepen.io/Tonynguyen111997/full/gvqXeQ"
						smallDesc="Weather app that checks user's local weather info using APIs and HTML5 Geolocation"
						largeDesc="This app was intended as an exercise on using APIs and using geolocation.
											The app used an api provided by openweathermap.org to fetch JSON data depending
											on the location given. The user's location was retrieved using HTML5 
											Geolocation API and sent to openweathermap in the appropriate format. After 
											receiving the JSON data the web app displays a background depending on the current
											weather and a temperature is displayed."/>
			</div>
		</div>
	);
}

export default Portfolio;