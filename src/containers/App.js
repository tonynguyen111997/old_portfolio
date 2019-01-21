import React, { PureComponent } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//components
import Particles from '../components/Particles/Particles';
import Nav from '../components/Nav/Nav';
import Quote from '../components/Quote/Quote';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';

import './App.scss';

library.add(fab, faEnvelope);

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			quoteOpac: "1",
			aboutOpac: "0",
			portfolioOpac: "0",
			skillsOpac: "0"
		}

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount = () => {
		window.removeListener('scroll', this.handleScroll);
	}

	handleOpacity = (id, stateName) => {
		const elem = document.getElementById(id);
		const elemBox = elem.getBoundingClientRect();
		const elemTop = elemBox.top;
		const elemBot = elemBox.bottom;

		if(elemTop >= 0 && elemBot <= window.innerHeight){
			this.setState({ [stateName]: "1" });
		} else if(id==="quote") {
			this.setState({ [stateName]: "0" });
		}
	}

	handleScroll = () => {
		this.handleOpacity("quote", "quoteOpac");
		this.handleOpacity("about", "aboutOpac");
		this.handleOpacity("portfolio", "portfolioOpac");
		this.handleOpacity("skills", "skillsOpac");
	}

  render() {
    return (
      <div className="App">
	    	<Particles />
        <Nav />
        <Quote quoteOpac={this.state.quoteOpac}/>
        <AboutMe aboutOpac={this.state.aboutOpac}/>
        <Portfolio portfolioOpac={this.state.portfolioOpac}/>
        <Skills skillsOpac={this.state.skillsOpac}/>
        <Footer />
      </div>
    );
  }
}

export default App;
