import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Main: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</React.Fragment>
	);
};

export default Main;
