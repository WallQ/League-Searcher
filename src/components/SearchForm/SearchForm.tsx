import React from 'react';
import { SearchIcon } from '../../assets/icons/Icons';
import { useForm } from 'react-hook-form';
import { SearchFormInt, SearchFormDataInt } from './SearchFormTypes';
import { regions, regionsInt } from '../../utils/regions';

import SearchFormFieldErrorMessage from './SearchFormFieldErrorMessage';

const SearchForm: React.FunctionComponent<SearchFormInt> = ({ onSubmit }) => {
	const id = React.useId();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<SearchFormDataInt>({ mode: 'onChange' });

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmit)} className='w-full'>
				<div className='flex flex-col items-center justify-center gap-y-4'>
					<div className='flex flex-col flex-wrap items-center justify-center gap-y-4 gap-x-4 align-middle lg:flex-row'>
						<label
							htmlFor={`${id}-username`}
							className='sr-only block text-base font-medium text-white'>
							Username
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 z-50 flex flex-col items-center'>
								<label
									htmlFor={`${id}-region`}
									className='sr-only block text-base font-medium text-white'>
									Region
								</label>
								<select
									id={`${id}-region`}
									className='block h-full w-full rounded-md border-transparent bg-transparent py-0 text-base font-normal text-gray-500 focus:border-blue-600 focus:ring-blue-600 sm:text-sm'
									{...register('region', {
										required: {
											value: true,
											message:
												'The region field is required!',
										},
									})}>
									{regions.map(
										(region: regionsInt, index: number) => (
											<option
												key={`${id}-${region.initials}-${index}`}
												value={region.url}>
												{region.initials}
											</option>
										)
									)}
								</select>
							</div>
							<div className='relative'>
								<input
									id={`${id}-username`}
									type='text'
									placeholder='Username'
									className='block h-full w-full rounded-md border-gray-300 pl-24 pr-12 text-base font-normal text-gray-900 focus:border-blue-600 focus:ring-blue-600 sm:text-sm'
									{...register('username', {
										required: {
											value: true,
											message:
												'The username field is required!',
										},
										max: {
											value: 16,
											message:
												"Username can't be no more than 16 characters long!",
										},
										min: {
											value: 3,
											message:
												'Username must be at least 3 characters long!',
										},
										maxLength: {
											value: 16,
											message:
												"Username can't be no more than 16 characters long!",
										},
										pattern: {
											value: /^[a-zA-Z0-9-_\s]*$/i,
											message:
												'Only letters from A to Z and numbers from 0 to 9 are allowed!',
										},
									})}
								/>
								<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
									<SearchIcon
										styles={'h-4 w-4 text-gray-500'}
									/>
								</div>
							</div>
						</div>
						<button
							type='submit'
							disabled={!isValid}
							className={`${
								isValid
									? 'cursor-pointer'
									: 'cursor-not-allowed opacity-80'
							} w-full rounded-md bg-blue-900 py-2 px-4 text-base font-medium text-white hover:bg-blue-600 lg:w-32`}>
							Submit
						</button>
					</div>
					{errors.username && (
						<SearchFormFieldErrorMessage
							message={errors.username.message}
						/>
					)}
					{errors.region && (
						<SearchFormFieldErrorMessage
							message={errors.region.message}
						/>
					)}
				</div>
			</form>
		</React.Fragment>
	);
};

export default SearchForm;
