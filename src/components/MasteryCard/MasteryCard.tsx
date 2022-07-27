import React from 'react';
import champions from '../../data/champion.json';
import { MasteryCardInt } from './MasteryCardTypes';

import numberToMastery from '../../utils/numberToMastery';
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
				<div className='flex flex-col flex-wrap items-center justify-center gap-16 align-middle'>
					<div className='relative'>
						<div className='absolute -bottom-16 left-0 right-0 z-50 mx-auto flex flex-row items-center justify-center'>
							<img
								src={numberToMastery(championLevel)}
								alt='Mastery Image'
								loading='eager'
								width={32}
								height={32}
								className='h-32 w-32'
							/>
						</div>
						<div className='rounded-full border-4 border-amber-500 p-2'>
							<img
								src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${championData.name}.png`}
								alt='Champion Avatar'
								loading='eager'
								width={32}
								height={32}
								className='h-32 w-32 rounded-full border-2 border-amber-500'
							/>
						</div>
					</div>
					<div className='flex flex-col flex-wrap items-center justify-center gap-y-2 align-middle'>
						<div className='flex flex-col flex-wrap items-center justify-center align-middle'>
							<h2 className='text-2xl font-bold text-white'>
								{championData.name}
							</h2>
							<p className='text-sm font-light capitalize text-white'>
								{championData.title}
							</p>
						</div>
						<p className='text-base font-normal text-white'>
							Mastery Points: {formatNumber(championPoints)}
						</p>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default MasteryCard;
