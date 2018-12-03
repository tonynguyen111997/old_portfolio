import React, { Component } from 'react';

//components
import NavBar from './NavBar/NavBar';

class Nav extends Component{
  handleScrollToElement = (id) => {
		const elem = document.getElementById(id);
		elem.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
  }
  
  render(){
    return(
      <NavBar handleScrollToElement={this.handleScrollToElement}/>
    );
  }
}

export default Nav;