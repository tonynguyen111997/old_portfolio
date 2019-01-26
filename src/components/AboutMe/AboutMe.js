import React from 'react'; 
import './AboutMe.scss';

//self-portrait img
import selfImg from '../../public/about-me/self-portrait.jpg';

//components
import SocialNetworksButtons from '../SocialNetworksButtons/SocialNetworksButtons';

const AboutMe = ({aboutOpac}) => {
	return (
		<div id="about-me-container" className="about-me">
			<div className="about-me-container" style={{opacity: aboutOpac}}>
				<h2>About Me</h2>
				<img alt="self portrait" id="about" src={selfImg} />
				<h3>Tony Nguyen</h3>
				<h4>tonynguyen111997@gmail.com</h4>
				<h3>Web Developer</h3>
				<p>Self taught web developer that is always looking to grow and improve. 
					I am a passionate learner that is eager to gain more experience. Learning 
					to program has been a passion of mine for many years now. A key aspect 
					of programming that has kept me interested in it is the problem solving. 
					I enjoy problem solving, as it gives me a challenge and the opportunity to 
					develop my critical thinking skills.</p>
				<SocialNetworksButtons containerClass="about-me-btn-container"/>
			</div>
		</div>
	);
}

export default AboutMe