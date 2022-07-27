export interface StatusType {
	message: string;
	status_code: number;
}

export type SummonerType = {
	id: string;
	accountId: string;
	puuid: string;
	name: string;
	profileIconId: number;
	revisionDate: number;
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
