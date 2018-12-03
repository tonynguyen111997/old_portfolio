import React from 'react';

const NavButton = ({ name, onClick }) => {
	return(
		<div>
			<button onClick={onClick}>
				<p>{name}</p>
			</button>
		</div>
	);
}

export default NavButton;