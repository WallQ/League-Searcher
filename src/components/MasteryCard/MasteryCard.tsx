import React from 'react';
import champions from '../../data/champion.json';
import { MasteryCardInt } from './MasteryCardType';

import formatNumber from '../../utils/formatNumber';

const MasteryCard: React.FunctionComponent<MasteryCardInt> = ({
	championId,
	championLevel,
	championPoints,
}) => {
	const championData = champions.find(
		(champion) => champion.key === championId.toString()
	);

	return (
		<React.Fragment>
			{championData && (
				<div className='flex flex-col flex-wrap items-center justify-center gap-4 align-middle'>
					<div className='rounded-full border-4 border-amber-500 p-2'>
						<img
							src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${championData.name}.png`}
							alt='Champion Avatar'
							loading='eager'
							width={64}
							height={64}
							className='h-32 w-32 rounded-full border-2 border-amber-500'
						/>
					</div>
					<div className='flex flex-col flex-wrap items-center justify-center align-middle'>
						<h2 className='text-2xl font-bold text-white'>
							{championData.name}
						</h2>
						<p className='text-sm font-light capitalize text-white'>
							{championData.title}
						</p>
					</div>
					<p className='text-base font-normal text-white'>
						Champion Level: {championLevel}
					</p>
					<p className='text-base font-normal text-white'>
						Champion Points: {formatNumber(championPoints)}
					</p>
				</div>
			)}
		</React.Fragment>
	);
};

export default MasteryCard;
