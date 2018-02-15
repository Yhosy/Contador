import React from 'react';
import ReactDOM from 'react-dom';


const Component = React.createClass({

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

					<button onClick={this.sumar_vida}>+</button>
					<label htmlFor="">{this.state.vida}</label>
					<button onClick={this.restar_vida}>-</button>

				</div>
			</div>
		)
	}
})

export default Component;