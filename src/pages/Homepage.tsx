import React from 'react';

// API's
import { getSummonerByName, getChampionsMasteries } from '../services/riotAPI';

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
} from '../contexts/Summoner/stateTypes';

// PlaceHolder's

// Components
import SearchForm from '../components/SearchForm/SearchForm';
import SummonerCard from '../components/SummonerCard/SummonerCard';
import MasteryCard from '../components/MasteryCard/MasteryCard';

const Homepage: React.FunctionComponent = () => {
	const { summoner, setSummoner, championsMasteries, setChampionsMasteries } =
		React.useContext(SummonerContext) as SummonerContextType;
	const [notFound, setNotFound] = React.useState<boolean | null>(null);

	const onSubmit = (data: SearchFormDataInt) => {
		getSummonerByName(data.region, data.username)
			.then((summoner: SummonerType) => {
				if (summoner.status !== undefined) {
					setNotFound(true);
					setSummoner(null);
					return;
				}
				setNotFound(false);
				setSummoner(summoner);
				getChampionsMasteries(data.region, summoner.id)
					.then((championsMasteries: ChampionMasteryType[]) =>
						setChampionsMasteries(championsMasteries)
					)
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
						{championsMasteries && (
							<div className='grid grid-cols-1 gap-24 lg:grid-cols-3'>
								{championsMasteries
									.slice(0, 3)
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
						)}
					</React.Fragment>
				)}
			</div>
		</React.Fragment>
	);
};

export default Homepage;
