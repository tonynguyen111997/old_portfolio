import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';



const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-btn-container">
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
			<p>Created by Tony Nguyen</p>
		</div>
	);
}

export default Footer;