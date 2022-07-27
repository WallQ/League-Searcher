import React from 'react';
import { ExclamationTriangleIcon } from '../../assets/icons/Icons';
import { SearchFormFieldErrorMessageInt } from './SearchFormTypes';

const SearchFormFieldErrorMessage: React.FunctionComponent<
	SearchFormFieldErrorMessageInt
> = ({ message }) => {
	return (
		<React.Fragment>
			<span className='inline-flex items-center gap-x-2 align-middle text-sm font-normal text-red-500'>
				<ExclamationTriangleIcon styles={'h-4 w-4 text-red-500'} />
				{message}
			</span>
		</React.Fragment>
	);
};

export default SearchFormFieldErrorMessage;
