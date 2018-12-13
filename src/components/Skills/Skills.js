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
				<img alt="react logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLFCIgz03Fgq8L4GLQJSFBUUCB4Xk90r4oIyOah0jKPZh_nE-"/>
				<img alt="redux logo" src="https://avatars0.githubusercontent.com/u/13142323?s=400&v=4"/>
				<img alt="express.js logo" src="https://www.atatus.com/images/devicon/icon-express.svg"/>
				<img alt="node.js logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF2a5ZVtpCNlzLJgzk3biHx22qZVijBA8jO1Q40oUoDu1qNYl"/>
				<img alt="sass logo" src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"/>
				<img alt="git logo" src="https://www.gitdvcs.com/img/logo/git-orange-light-backgroun-stacked.svg"/>
				<img alt="GitHub logo" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
				<img alt="SQL icon" src="https://cdn0.iconfinder.com/data/icons/superuser-extension-light/512/675277-data_database_sql_query-512.png" />
				<img alt="PostgreSQL logo" src="https://safenet.gemalto.com/uploadedImages/images/Logos/postgresql-logo.png" />
				<img alt="MySQL logo" src="https://cdn.iconscout.com/icon/free/png-256/mysql-6-226028.png" />
				<img style={{width: "216px", height: 77}} alt="Knex logo" src="https://knexjs.org/assets/images/knex.png" />
				<img style={{width: "171px", height: 77}} alt="Sequelize Logo" src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-card.png" />
			</div>
		</div>
	);
}

export default Skills;