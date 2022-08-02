import React from 'react';

// API's
import {
	getSummonerByName,
	getChampionsMasteries,
	getSummonerLeague,
} from '../services/riotAPI';

// Contexts
import {
	SummonerContextType,
	SummonerContext,
} from '../contexts/Summoner/summoner';

//Types
import { SearchFormDataInt } from '../components/SearchForm/SearchFormTypes';
import {
	SummonerType,
	ChampionMasteryType,
	SummonerLeagueType,
} from '../contexts/Summoner/stateTypes';

// PlaceHolder's

// Components
import SearchForm from '../components/SearchForm/SearchForm';
import SummonerCard from '../components/SummonerCard/SummonerCard';
import LeagueCard from '../components/LeagueCard/LeagueCard';
import MasteryCard from '../components/MasteryCard/MasteryCard';

const Homepage: React.FunctionComponent = () => {
	const {
		summoner,
		setSummoner,
		championsMasteries,
		setChampionsMasteries,
		league,
		setLeague,
	} = React.useContext(SummonerContext) as SummonerContextType;
	const [notFound, setNotFound] = React.useState<boolean | null>(null);
	const [championsMasteriesCount, setChampionsMasteriesCount] =
		React.useState<number>(3);

	const onSubmit = (data: SearchFormDataInt) => {
		getSummonerByName(data.region, data.username)
			.then((summoner: SummonerType) => {
				if (summoner.status !== undefined) {
					setNotFound(true);
					setSummoner(null);
					return;
				}
				setNotFound(false);
				setChampionsMasteriesCount(3);
				setSummoner(summoner);
				getChampionsMasteries(data.region, summoner.id)
					.then((championsMasteries: ChampionMasteryType[]) =>
						setChampionsMasteries(championsMasteries)
					)
					.catch((error) => console.error('Error => ', error));
				getSummonerLeague(data.region, summoner.id)
					.then((league: SummonerLeagueType[]) => setLeague(league))
					.catch((error) => console.error('Error => ', error));
			})
			.catch((error) => console.error('Error => ', error));
	};

	return (
		<React.Fragment>
			<div className='container mx-auto flex flex-col items-center gap-16 px-4 py-16 sm:px-6 lg:px-8'>
				<SearchForm onSubmit={onSubmit} />
				{notFound ? (
					<React.Fragment>
						<p className='text-3xl font-extrabold text-white'>
							Summoner was not found!
						</p>
					</React.Fragment>
				) : null}
				{summoner && (
					<React.Fragment>
						<SummonerCard
							name={summoner.name}
							iconId={summoner.profileIconId}
							level={summoner.summonerLevel}
						/>
						{league &&
							league.map((league: any, index: number) => (
								<LeagueCard
									key={`${index}-LeagueCard`}
									tier={league.tier}
								/>
							))}
						{championsMasteries && (
							<React.Fragment>
								<div className='grid grid-cols-1 gap-24 lg:grid-cols-3'>
									{championsMasteries
										.slice(0, championsMasteriesCount)
										.map((mastery: any, index: number) => (
											<MasteryCard
												key={`${index}-MasteryCard`}
												championId={mastery.championId}
												championLevel={
													mastery.championLevel
												}
												championPoints={
													mastery.championPoints
												}
											/>
										))}
								</div>
								<button
									onClick={() =>
										setChampionsMasteriesCount(
											championsMasteriesCount + 6
										)
									}
									type='submit'
									className='w-full cursor-pointer rounded-md bg-blue-900 py-2 px-4 text-base font-medium text-white hover:bg-blue-600 lg:w-32'>
									View More
								</button>
							</React.Fragment>
						)}
					</React.Fragment>
				)}
			</div>
		</React.Fragment>
	);
};

export default Homepage;
