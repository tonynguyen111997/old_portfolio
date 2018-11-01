import React from 'react';

import './Skills.css';


const Skills = ({skillsOpac}) => {
	return(
		<div id="skills-container" className="skills-container">
			<h2 id="skills" style={{opacity: skillsOpac}}>Skills</h2>
			<div className="skills" style={{opacity: skillsOpac}}>
				<img alt="html5 logo" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" />
				<img alt="css3 logo" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/>
				<img alt="javascript logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
				<img alt="react logo" src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png"/>
				<img alt="redux logo" src="http://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png"/>
				<img alt="express.js logo" src="http://www.mindrops.com/images/expressJS.png"/>
				<img alt="node.js logo" src="http://pluspng.com/img-png/nodejs-logo-png-node-js-development-296.png"/>
				<img alt="sass logo" src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"/>
				<img alt="git logo" src="https://www.gitdvcs.com/img/logo/git-orange-light-backgroun-stacked.svg"/>
			</div>
		</div>
	);
}

export default Skills;