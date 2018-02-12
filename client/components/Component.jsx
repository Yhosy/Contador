import React from 'react';

const Component = React.createClass({
	render() {
		
		let vida = this.props.vida;
		
		function sumar_vida(){
			vida++;
		}

		function restar_vida(){
			vida--;
		}

		return (
			<div>
				<h2>Jugador 1</h2>
				<div>
					<button onClick={sumar_vida}>+</button>
					<label htmlFor="">{vida}</label>
					<button onClick={restar_vida}>-</button>
				</div>
			</div>
		)
	}
})

// React.render(
//     <Component/>,
//     document.getElementById('root')
// );


export default Component;