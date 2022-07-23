import React from 'react';
import { getSummonerByName } from '../services/riotAPI';

// Types
import summonerInt from '../types/summoner';
import { SearchFormInt } from '../components/SearchForm/SearchFormType';

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

	const onSubmit = (data: SearchFormInt) => {
		console.log('Antes => ', summoner);
		getSummonerByName(data.username, data.region)
			.then((summoner: summonerInt) => {
				console.log(summoner);
				setSummoner(summoner);
			})
			.catch((error) => {
				console.error(error);
				setSummoner(null);
			});
	};

	return (
		<React.Fragment>
			<div className='container mx-auto flex h-screen flex-col gap-y-4 px-4 py-12 sm:px-6 lg:px-8'>
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
