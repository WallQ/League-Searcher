import React from 'react';

const Footer: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className='bg-blue-800'>
				<div className='container mx-auto px-4 py-6 sm:px-6 lg:px-8'>
					<div className='flex flex-row items-center justify-center align-middle'>
						<p className='text-xs font-light text-white'>
							Copyright &copy; Sérgio Félix 2022 All rights
							reserved.
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
