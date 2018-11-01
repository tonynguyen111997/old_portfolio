import React from 'react';

// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

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
		</div>
	);
}

export default Footer;