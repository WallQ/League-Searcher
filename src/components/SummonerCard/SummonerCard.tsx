import React from 'react';
import { ProfileCardInt } from './SummonerCardTypes';

const ProfileCard: React.FunctionComponent<ProfileCardInt> = ({
	name,
	iconId,
	level,
}) => {
	return (
		<React.Fragment>
			<div className='flex flex-col flex-wrap items-center justify-center gap-8 align-middle'>
				<div className='relative'>
					<h3 className='absolute -bottom-4 left-0 right-0 z-50 mx-auto flex w-min flex-row items-center justify-center rounded-2xl border-4 border-amber-500 bg-slate-900 px-4 py-1 text-center text-xl font-black text-white'>
						{level}
					</h3>
					<div className='rounded-full border-4 border-amber-500 p-2'>
						<img
							src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${iconId}.png`}
							alt='Summoner Icon'
							loading='eager'
							width={64}
							height={64}
							className='h-64 w-64 rounded-full border-2 border-amber-500'
						/>
					</div>
				</div>
				<h1 className='text-3xl font-extrabold text-white'>{name}</h1>
			</div>
		</React.Fragment>
	);
};

export default ProfileCard;
