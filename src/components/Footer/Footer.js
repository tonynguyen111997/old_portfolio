import React from 'react';
import './Footer.css';

import SocialNetworksButtons from '../SocialNetworksButtons/SocialNetworksButtons';

const Footer = () => {
	return (
		<div className="footer">
			<SocialNetworksButtons containerClass="footer-btn-container" />
			<p>Created by Tony Nguyen</p>
			<p>tonynguyen111997@gmail.com</p>
		</div>
	);
}

export default Footer;