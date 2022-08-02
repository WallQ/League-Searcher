export const summonerInitialState = {
	id: '',
	accountId: '',
	puuid: '',
	name: '',
	profileIconId: NaN,
	revisionDate: NaN,
	summonerLevel: NaN,
};

export const championsMasteriesInitialState = [
	{
		championPointsUntilNextLevel: NaN,
		chestGranted: false,
		championId: NaN,
		lastPlayTime: NaN,
		championLevel: NaN,
		summonerId: '',
		championPoints: NaN,
		championPointsSinceLastLevel: NaN,
		tokensEarned: NaN,
	},
];

export const summonerLeagueInitialState = [
	{
		leagueId: '',
		summonerId: '',
		summonerName: '',
		queueType: '',
		tier: '',
		rank: '',
		leaguePoints: NaN,
		wins: NaN,
		losses: NaN,
		hotStreak: false,
		veteran: false,
		freshBlood: false,
		inactive: false,
	},
];
