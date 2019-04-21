import React from 'react';

import './Skills.scss';


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
				<img alt="bootstrap logo" src="https://devstickers.com/assets/img/cat/bootstrap.png" />
				<img alt="sass logo" src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"/>
				<img alt="git logo" src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"/>
				<img alt="GitHub logo" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
				<img alt="SQL icon" src="https://cdn0.iconfinder.com/data/icons/superuser-extension-light/512/675277-data_database_sql_query-512.png" />
				<img alt="PostgreSQL logo" src="https://safenet.gemalto.com/uploadedImages/images/Logos/postgresql-logo.png" />
				<img alt="MySQL logo" src="https://cdn.iconscout.com/icon/free/png-256/mysql-6-226028.png" />
				<img alt="Knex logo" src="https://cdn.worldvectorlogo.com/logos/knex-1.svg" />
				<img alt="TypeScript logo" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" />
				<img alt="next logo" src="https://cdn.auth0.com/blog/logos/nextjs-logo.png" />
				<img alt="jQuery logo" src="https://www.wpfaster.org/wp-content/uploads/2013/06/jquery-logo.png" />
				<img alt="jest logo" src="https://ih1.redbubble.net/image.404023266.1965/pp,550x550.jpg" />
				<img alt="linux logo" src="https://www.famouslogos.us/images/linux-logo.jpg" />
				<img alt="adobe xd logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAOMN3EwLJGE22vqSgm5ZeOhvQmsxYD8FPyLPfsgMx1HDfhRu" />
			</div>
		</div>
	);
}

export default Skills;