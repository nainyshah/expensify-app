// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract class

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
		<p>The bio is: {props.detail}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private Info. Kindly dont share</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p> You must need to login First!</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// 	<AdminInfo
// 		isAdmin={false}
// 		info="These are the details."
// 		detail="My Name is Syed Raza."
// 	/>,
// 	document.getElementById('app')
// );

ReactDOM.render(
	<AuthInfo
		isAuthenticated={true}
		info="These are the details."
		detail="My Name is Syed Raza."
	/>,
	document.getElementById('app')
);
