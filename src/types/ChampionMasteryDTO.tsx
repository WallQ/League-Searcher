import errorInt from './status';

export default interface masteryInt extends errorInt {
	championPointsUntilNextLevel: number;
	chestGranted: boolean;
	championId: number;
	lastPlayTime: number;
	championLevel: number;
	summonerId: string;
	championPoints: number;
	championPointsSinceLastLevel: number;
	tokensEarned: number;
}
