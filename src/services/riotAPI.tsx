import axios from 'axios';

const fetchFromAPI = (endpoint: string) => {
	return axios
		.get(endpoint)
		.then((response) => response.data)
		.catch((error) => error);
};

export const getSummonerByName = (username: string, region: string) =>
	fetchFromAPI(
		`${region}/lol/summoner/v4/summoners/by-name/${username}?api_key=${
			import.meta.env.VITE_RIOT_API_KEY || ''
		}`
	);
