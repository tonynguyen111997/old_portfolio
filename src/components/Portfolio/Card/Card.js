import React, { Component} from 'react';

import './Card.css'

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
		const { id, img, alt} = this.props;
		return (
			<div>
				<div id={id} className="card">
					<img src={img} alt={alt}/>
					<p className="small-card-info">Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
						Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
						Etiam magna ligula, ultricies pharetra mauris quis.</p>
					<button id="btn-more" className="btn-more" style={this.state.btnStyle} onClick={this.toggleLargeCard}>
						<p>More Info</p>
					</button>
				</div>
				<div className="large-card" style={this.state.largeCardStyle}>
					<button onClick={this.toggleLargeCard}>
						<p><strong>X</strong></p>
					</button>
					<img src={img} alt={alt}/>
					<div>
						<p>Loremes ipsum dolor sit amet, consectetur adipiscing elit. 
						Morbi egestas leo vel felis pulvinar, sed consequat justo sodales. 
						Etiam magna ligula, ultricies pharetra mauris quis. {id} </p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;