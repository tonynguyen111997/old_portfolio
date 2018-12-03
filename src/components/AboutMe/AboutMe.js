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
				<p>Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
				Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
				Etiam magna ligula, ultricies pharetra mauris quis.</p>
				<SocialNetworksButtons containerClass="about-me-btn-container"/>
			</div>
		</div>
	);
}

export default AboutMe