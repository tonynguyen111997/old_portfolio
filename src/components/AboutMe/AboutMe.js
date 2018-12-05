import React from 'react'; 
import './AboutMe.css';

//components
import SocialNetworksButtons from '../SocialNetworksButtons/SocialNetworksButtons';

const AboutMe = ({aboutOpac}) => {
	return (
		<div id="about-me-container" className="about-me">
			<div className="about-me-container" style={{opacity: aboutOpac}}>
				<h2>About Me</h2>
				<img alt="Tony Nguyen" id="about" src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552" />
				<h3>Junior Full Stack Web Developer</h3>
				<p>Self taught web developer looking to further develop web development skills. 
				I am a passionate learner that is eager to gain more experience.
				Learning to program has been a passion of mine for more than a year now. A key aspect of 
				programming that has kept me interested in it is the problem solving.
				I enjoy problem solving, as it gives me a challenge and the opportunity to develop my 
				critical thinking skills. Currently I have experience with HTML, CSS, Bootstrap, 
				SASS/SCSS,  Javascript, React, Redux, Node.js, Express.js, Git and GitHub.</p>
				<SocialNetworksButtons containerClass="about-me-btn-container"/>
			</div>
		</div>
	);
}

export default AboutMe