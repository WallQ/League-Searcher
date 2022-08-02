const fetchFromAPI = (endpoint: string) => {
	return fetch(endpoint, {
		method: 'GET',
	})
		.then((response) => response.json())
		.catch((error) => {
			throw new Error('Oops! Something went wrong!', error);
		});
};

export const getSummonerByName = (region: string, username: string) =>
	fetchFromAPI(
		`https://cors-anywhere.herokuapp.com/https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${
			import.meta.env.VITE_RIOT_API_KEY || ''
		}`
	);

export const getChampionsMasteries = (region: string, summonerId: string) =>
	fetchFromAPI(
		`https://cors-anywhere.herokuapp.com/https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${
			import.meta.env.VITE_RIOT_API_KEY || ''
		}`
	);

export const getSummonerLeague = (region: string, summonerId: string) =>
	fetchFromAPI(
		`https://cors-anywhere.herokuapp.com/https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${
			import.meta.env.VITE_RIOT_API_KEY || ''
		}`
	);
