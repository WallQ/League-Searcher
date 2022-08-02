export interface StatusType {
	message: string;
	status_code: number;
}

export type SummonerType = {
	accountId: string;
	profileIconId: number;
	revisionDate: number;
	name: string;
	id: string;
	puuid: string;
	summonerLevel: number;
	status?: StatusType;
};

export type ChampionMasteryType = {
	championPointsUntilNextLevel: number;
	chestGranted: boolean;
	championId: number;
	lastPlayTime: number;
	championLevel: number;
	summonerId: string;
	championPoints: number;
	championPointsSinceLastLevel: number;
	tokensEarned: number;
};

export type SummonerLeagueType = {
	leagueId: string;
	summonerId: string;
	summonerName: string;
	queueType: string;
	tier: string;
	rank: string;
	leaguePoints: number;
	wins: number;
	losses: number;
	hotStreak: boolean;
	veteran: boolean;
	freshBlood: boolean;
	inactive: boolean;
};
