import React from 'react';
import { ProfileCardInt } from './ProfileCardType';

const ProfileCard: React.FunctionComponent<ProfileCardInt> = ({
	name,
	iconId,
	level,
}) => {
	return (
		<React.Fragment>
			<div className='flex flex-col flex-wrap items-center justify-center gap-y-4 align-middle'>
				<div className='relative'>
					<h3 className='absolute -top-5 left-0 right-0 z-50 mx-auto flex w-min flex-row items-center justify-center rounded-2xl border-4 border-white bg-slate-900 px-4 py-1 text-center text-xl font-black text-white'>
						{level}
					</h3>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${iconId}.png`}
						alt='Summoner Icon'
						loading='eager'
						width={64}
						height={64}
						className='h-64 w-64 rounded-3xl border-4 border-white'
					/>
				</div>
				<h1 className='text-3xl font-black text-white'>{name}</h1>
			</div>
		</React.Fragment>
	);
};

export default ProfileCard;
