import React from 'react';

const ProfileCardPlaceHolder: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className='flex flex-col flex-wrap items-center justify-center gap-y-4 align-middle'>
				<div className='relative'>
					<div className='absolute -top-4 left-0 right-0 z-50 mx-auto h-9 w-20 animate-pulse rounded-2xl bg-white' />
					<div className='h-64 w-64 animate-pulse rounded-3xl bg-white' />
				</div>
				<div className='h-9 w-40 animate-pulse rounded-3xl bg-white' />
			</div>
		</React.Fragment>
	);
};

export default ProfileCardPlaceHolder;
