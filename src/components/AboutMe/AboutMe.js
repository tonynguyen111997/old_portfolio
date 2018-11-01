import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutMe.css';

const AboutMe = ({aboutOpac}) => {
	return (
		<div id="about-me-container" className="about-me">
			<div className="about-me-container" style={{opacity: aboutOpac}}>
				<h2>About Me</h2>
				<img alt="my image" id="about" src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552" />
				<p>Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
				Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
				Etiam magna ligula, ultricies pharetra mauris quis.</p>
				<div className="about-me-btn-container">
					<button>
						<FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
					</button>
					<button>
						<FontAwesomeIcon icon={['fab', 'github']} size="2x" />
					</button>
					<button>
						<FontAwesomeIcon icon={['fab', 'codepen']} size="2x" />
					</button>
					<button>
						<FontAwesomeIcon icon="envelope" size="2x" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default AboutMe