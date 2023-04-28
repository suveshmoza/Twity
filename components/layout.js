import { useState } from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
	// const [darkMode]

	return (
		<div className=" mx-6 md:max-w-2xl md:mx-auto font-opensans ">
			<Nav />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
