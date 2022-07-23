import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { SearchFormFieldErrorMessageInt } from './SearchFormTypes';

const SearchFormFieldErrorMessage: React.FunctionComponent<
	SearchFormFieldErrorMessageInt
> = ({ message }) => {
	return (
		<React.Fragment>
			<span className='inline-flex items-center gap-x-2 align-middle text-sm font-normal text-red-500'>
				<FaExclamationTriangle
					className='h-4 w-4 text-red-500'
					aria-hidden='true'
				/>
				{message}
			</span>
		</React.Fragment>
	);
};

export default SearchFormFieldErrorMessage;
