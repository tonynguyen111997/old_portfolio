import React from 'react'; 
import './AboutMe.scss';

//components
import SocialNetworksButtons from '../SocialNetworksButtons/SocialNetworksButtons';

const AboutMe = ({aboutOpac}) => {
	return (
		<div id="about-me-container" className="about-me">
			<div className="about-me-container" style={{opacity: aboutOpac}}>
				<h2>About Me</h2>
				<img alt="self portrait" id="about" src="https://avatars1.githubusercontent.com/u/36907562?s=460&v=4" />
				<h3>Tony Nguyen</h3>
				<h4>tonynguyen111997@gmail.com</h4>
				<h3>Web Developer</h3>
				<p>
					Self taught web developer that is always looking to grow and improve. 
					I am a passionate learner that is always eager to gain more experience. Learning 
					to program has been a passion of mine for many years now, because there is always 
					something new to learn. I enjoy solving real life problems by developing technologies 
					that solve them. 
				</p>
				<SocialNetworksButtons containerClass="about-me-btn-container"/>
			</div>
		</div>
	);
}

export default AboutMe