import React from 'react';
import {
	SummonerType,
	ChampionMasteryType,
	SummonerLeagueType,
} from './stateTypes';
import {
	summonerInitialState,
	championsMasteriesInitialState,
	summonerLeagueInitialState,
} from './initialsValues';

export type SummonerContextType = {
	summoner: SummonerType | null;
	setSummoner: React.Dispatch<React.SetStateAction<SummonerType | null>>;
	championsMasteries: Array<ChampionMasteryType> | null;
	setChampionsMasteries: React.Dispatch<
		React.SetStateAction<Array<ChampionMasteryType> | null>
	>;
	league: Array<SummonerLeagueType> | null;
	setLeague: React.Dispatch<
		React.SetStateAction<Array<SummonerLeagueType> | null>
	>;
};

export type SummonerContextProviderType = {
	children: React.ReactNode;
};

export const SummonerContext = React.createContext<SummonerContextType | null>(
	null
);

export const SummonerContextProvider = ({
	children,
}: SummonerContextProviderType) => {
	const [summoner, setSummoner] = React.useState<SummonerType | null>(null);
	const [championsMasteries, setChampionsMasteries] =
		React.useState<Array<ChampionMasteryType> | null>(null);
	const [league, setLeague] =
		React.useState<Array<SummonerLeagueType> | null>(null);

	return (
		<SummonerContext.Provider
			value={{
				summoner,
				setSummoner,
				championsMasteries,
				setChampionsMasteries,
				league,
				setLeague,
			}}>
			{children}
		</SummonerContext.Provider>
	);
};
