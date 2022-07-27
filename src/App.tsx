import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Contexts
import { SummonerContextProvider } from './contexts/Summoner/summoner';

// Components
import Layout from './components/Layout/Layout';

// Pages
import Homepage from './pages/Homepage';

const App: React.FunctionComponent = () => {
	return (
		<SummonerContextProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index={true} element={<Homepage />} />
					</Route>
				</Routes>
			</Router>
		</SummonerContextProvider>
	);
};

export default App;
