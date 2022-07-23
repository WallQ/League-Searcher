import React from 'react';
import { getSummonerByName } from '../services/riotAPI';

// Types
import summonerInt from '../types/summoner';
import { SearchFormDataInt } from '../components/SearchForm/SearchFormTypes';

// Components
import ProfileCardPlaceHolder from '../components/ProfileCard/ProfileCardPlaceHolder';
const SearchForm = React.lazy(
	() => import('../components/SearchForm/SearchForm')
);
const ProfileCard = React.lazy(
	() => import('../components/ProfileCard/ProfileCard')
);

const Homepage: React.FunctionComponent = () => {
	const [summoner, setSummoner] = React.useState<summonerInt | null>(null);

	const onSubmit = (data: SearchFormDataInt) => {
		getSummonerByName(data.region, data.username)
			.then((summoner: summonerInt) => {
				if (summoner.status) return setSummoner(null);
				setSummoner(summoner);
			})
			.catch((error) => {
				console.error('Error => ', error);
				setSummoner(null);
			});
	};

	return (
		<React.Fragment>
			<div className='container mx-auto flex h-screen flex-col items-center gap-y-16 px-4 py-12 sm:px-6 lg:px-8'>
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
			</div>
		</React.Fragment>
	);
};

export default Homepage;
