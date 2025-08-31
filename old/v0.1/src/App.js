// function Header() {
// 	return (
// 		<div>
// 			<h1>
// 				Ali Hadizadeh Moghadam
// 			</h1>
// 			<h3>
// 				Computer Science MSc student @ Sharif University of Technology
// 			</h3>
// 		</div>
// 	);
// }

// import React from 'react';

const MAIN_COLOR = '#dd5500'
const MAIN_BLACK = '#400000'

function Header() {
	const headerStyle = {
		// whiteSpace: 'nowrap',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: MAIN_COLOR, // Background color for the header
		color: MAIN_BLACK, // Text color
		textAlign: 'center', // Center-align text within the header
		height: '20vmin',
	};

	const nameStyle = {
		fontSize: '7vmin',
		fontWeight: 'bold',
		fontFamily: 'Noto Sans, sans-serif'
	};

	const affilStyle = {
		fontSize: '2.85vmin',
		fontFamily: 'Noto Sans, sans-serif'
	};

	const menuButtonStyle = {
		// display: 'inline-block',
		textAlign: 'center',
		fontSize: '10vmin',
	};

	const titleStyle = {
		// display: 'inline-block',
		textAlign: 'center',
		padding: '1em 0', // Add some padding to the top and bottom of the header
	};

	return (
		<header style={headerStyle}>
				<div style={menuButtonStyle}>
					X
				</div>
				<div style={titleStyle}>
					<div style={nameStyle}>Ali Hadizadeh Moghadam</div>
					<div style={affilStyle}><b>Computer Science MSc</b> student <b>@ Sharif</b> University of Technology</div>
				</div>
				<div style={menuButtonStyle}>
					X
				</div>
		</header>
	);
}

export default Header;
