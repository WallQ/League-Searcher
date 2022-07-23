import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage';

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index={true} element={<Homepage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
