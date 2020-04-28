import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
const Header = (props) => (
	<nav
		id="main-nav"
		className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
	>
		<div className="container">
			<a href="#" className="navbar-brand">
				{props.title}
			</a>
		</div>
	</nav>
);

Header.defaultProps = {
	title: 'Syed Raza',
};

export default Header;
