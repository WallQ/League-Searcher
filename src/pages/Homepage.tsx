import React from 'react';
import { getSummonerByName, getTop3ChampionMastery } from '../services/riotAPI';

// Types
import summonerInt from '../types/SummonerDTO';
import masteryInt from '../types/ChampionMasteryDTO';
import { SearchFormDataInt } from '../components/SearchForm/SearchFormTypes';

// Components
import ProfileCardPlaceHolder from '../components/ProfileCard/ProfileCardPlaceHolder';
const SearchForm = React.lazy(
	() => import('../components/SearchForm/SearchForm')
);
const ProfileCard = React.lazy(
	() => import('../components/ProfileCard/ProfileCard')
);
const MasteryCard = React.lazy(
	() => import('../components/MasteryCard/MasteryCard')
);

const Homepage: React.FunctionComponent = () => {
	const [summoner, setSummoner] = React.useState<summonerInt | null>(null);
	const [mastery, setMastery] = React.useState<masteryInt[] | null>(null);

	const onSubmit = (data: SearchFormDataInt) => {
		getSummonerByName(data.region, data.username)
			.then((summoner: summonerInt) => {
				setSummoner(summoner);

				getTop3ChampionMastery(data.region, summoner.id)
					.then((mastery: masteryInt[]) => {
						setMastery(mastery);
					})
					.catch((error) => {
						console.error('Error => ', error);
						setMastery(null);
					});
			})
			.catch((error) => {
				console.error('Error => ', error);
				setSummoner(null);
			});
	};

	return (
		<React.Fragment>
			<div className='container mx-auto flex flex-col items-center gap-16 px-4 py-12 sm:px-6 lg:px-8'>
				<SearchForm onSubmit={onSubmit} />
				{summoner && (
					<React.Suspense fallback={<ProfileCardPlaceHolder />}>
						<ProfileCard
							name={summoner.name}
							iconId={summoner.profileIconId}
							level={summoner.summonerLevel}
						/>
					</React.Suspense>
				)}
				{mastery && (
					<div className='grid grid-cols-1 gap-24 lg:grid-cols-3'>
						{mastery
							.slice(0, 3)
							.map((mastery: any, index: number) => (
								<MasteryCard
									key={`${index}-MasteryCard`}
									championId={mastery.championId}
									championLevel={mastery.championLevel}
									championPoints={mastery.championPoints}
								/>
							))}
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default Homepage;
