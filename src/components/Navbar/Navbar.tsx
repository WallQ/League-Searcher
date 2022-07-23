import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className='bg-blue-800'>
				<div className='container mx-auto px-4 py-6 sm:px-6 lg:px-8'>
					<div className='flex flex-row flex-wrap items-center justify-between align-middle'>
						<Link to={'/'}>
							<h1 className='text-2xl font-medium text-white'>
								League Searcher
							</h1>
						</Link>
						<ol className='flex flex-row gap-x-4'>
							<li>
								<a
									href='https://github.com/WallQ'
									rel='noreferrer'
									target='_blank'>
									<FaGithub
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/sergiofelixdev/'
									rel='noreferrer'
									target='_blank'>
									<FaLinkedin
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</a>
							</li>
							<li>
								<a href='mailto:sergiofelixdev@gmail.com'>
									<FaEnvelope
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
