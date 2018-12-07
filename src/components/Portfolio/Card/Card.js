import React, { Component} from 'react';

import './Card.css'

//components
import LargeCard from './LargeCard/LargeCard';
import SmallCard from './SmallCard/SmallCard';

class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			btnStyle: {
				bottom: "0",
				opacity: "0"
			},
			largeCardStyle: {
				opacity: "0",
				left: "100%"
			}
		}
	}

	moveBtn = (event) => {
		switch(event.type){
			case "mouseover":
				this.setState({btnStyle: {bottom: "30%", opacity: "1"}});
				break;
			case "mouseout":
				this.setState({btnStyle: {bottom: "0%", opacity: "0"}});
				break;
			default:
				break;
		}
	}

	toggleLargeCard = () => {
		const preventDefault = (event) => {
				event.preventDefault();
				event.returnValue = false;
		}
		if(this.state.largeCardStyle.opacity === "0"){
			this.setState({largeCardStyle: {opacity: "1", left: "5%"}});
			window.onwheel = preventDefault;
			window.ontouchmove = preventDefault;
			document.onkeydown = preventDefault;
		} else {
			this.setState({largeCardStyle: {opacity: "0", left: "100%"}});
			window.onwheel = null;
			window.ontouchmove = null;
			document.onkeydown = null;
		}
	}

	componentDidMount = () => {
		const { id } = this.props;
		const card = document.getElementById(id);
		card.addEventListener("mouseover", this.moveBtn);
		card.addEventListener("mouseout", this.moveBtn);
	}

	componentWillUnmount = () => {

	}
	render() {
		const { id, img, alt, smallDesc, largeDesc, link} = this.props;
		return (
			<div>
				<SmallCard btnStyle={this.state.btnStyle} onToggleLargeCard={this.toggleLargeCard} id={id} img={img} alt={alt} desc={smallDesc}/>
				<LargeCard style={this.state.largeCardStyle} onToggleLargeCard={this.toggleLargeCard} id={id} img={img} alt={alt} desc={largeDesc} link={link}/>
			</div>
		);
	}
}

export default Card;