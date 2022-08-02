import React from 'react';
import { LeagueCardInt } from './LeagueCardTypes';
import stringToLeague from '../../utils/stringToLeague';

const LeagueCard: React.FunctionComponent<LeagueCardInt> = ({ tier }) => {
	return (
		<React.Fragment>
			<div className='flex flex-col flex-wrap items-center justify-center gap-16 align-middle'>
				<img
					src={stringToLeague(tier)}
					alt='League Image'
					loading='eager'
					width={48}
					height={48}
					className='h-48 w-48'
				/>
			</div>
		</React.Fragment>
	);
};

export default LeagueCard;
