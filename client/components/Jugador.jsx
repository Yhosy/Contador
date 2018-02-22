import React from 'react';
// import styles from '../styles/jugador.css';

const buttonStyles = {
	padding: '30px'
}


const Jugador = React.createClass({

	getInitialState: function () {
		console.log("Estoy en el initial state...");
		return { vida: 20 };

	},

	sumar_vida() {
		let vida=++this.state.vida;
		this.setState({ vida: vida });
	},

	restar_vida() {
		let vida=--this.state.vida;
		this.setState({ vida: vida });
	},
	
	render() {
		return (
			<div>
				<h2>Jugador 1</h2>
				<div>

					<button onClick={this.sumar_vida} style={buttonStyles}>+</button>
					<label htmlFor="">{this.state.vida}</label>
					<button onClick={this.restar_vida}>-</button>

				</div>
			</div>
		)
	}
})

export default Jugador;