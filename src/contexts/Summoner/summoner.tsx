import React from 'react';
import { SummonerType, ChampionMasteryType } from './stateTypes';
import {
	summonerInitialState,
	championsMasteriesInitialState,
} from './initialsValues';

export type SummonerContextType = {
	summoner: SummonerType | null;
	setSummoner: React.Dispatch<React.SetStateAction<SummonerType | null>>;
	championsMasteries: Array<ChampionMasteryType> | null;
	setChampionsMasteries: React.Dispatch<
		React.SetStateAction<Array<ChampionMasteryType> | null>
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

	return (
		<SummonerContext.Provider
			value={{
				summoner,
				setSummoner,
				championsMasteries,
				setChampionsMasteries,
			}}>
			{children}
		</SummonerContext.Provider>
	);
};
