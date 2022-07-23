import axios from 'axios';

const fetchFromAPI = (endpoint: string) => {
	return axios
		.get(endpoint, {
			headers: {
				'Content-Type': 'application/json',
				Origin: 'https://league-searcher.vercel.app/',
				'X-Riot-Token': import.meta.env.VITE_RIOT_API_KEY || '',
			},
		})
		.then((response) => response.data)
		.catch((error) => error);
};

export const getSummonerByName = (username: string, region: string) =>
	fetchFromAPI(`${region}/lol/summoner/v4/summoners/by-name/${username}`);
