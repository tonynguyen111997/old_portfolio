import React, { PureComponent } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Particles from 'react-particles-js';

//components
import NavBar from '../components/NavBar/NavBar';
import Quote from '../components/Quote/Quote';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';

import './App.css';

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
	    	<Particles params={{
	    		particles:{
	    			number: { 
	    				value: 160, 
	    				density: { enable: true, value_area: 800 } 
	    			},
	    			color: { value: "#284b63" },
	    			shape: {
				      type: "circle",
				      stroke: { width: 0, color: "#000000" },
				      polygon: { nb_sides: 5 },
				      image: { src: "img/github.svg", width: 100, height: 100 }
				    },
				    opacity: {
				      value: 1,
				      random: true,
				      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
				    },
				    size: {
				      value: 3,
				      random: true,
				      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
				    },
	    			line_linked:{
				      enable: false,
				      distance: 150,
				      color: "#ffffff",
				      opacity: 0.4,
				      width: 1
	    			},
  			    move: {
				      enable: true,
				      speed: 1,
				      direction: "none",
				      random: true,
				      straight: false,
				      out_mode: "out",
				      bounce: false,
				      attract: { enable: false, rotateX: 600, rotateY: 600 }
				    }
	    		}
	    	}} 
    		style={{
    			position: "fixed",
    			height: "100%",
    			width: "100%",
    			backgroundSize: "cover",
    			backgroundPosition: "50% 50%",
    			backgroundRepeat: "no-repeat",
    			zIndex: "-1"
    		}}
	    	/>
        <NavBar />
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
