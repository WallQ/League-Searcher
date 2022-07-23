import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchFormInt } from './SearchFormType';
import { regions, regionsInt } from '../../utils/regions';

interface Props {
	onSubmit: (data: SearchFormInt) => void;
}

const SearchForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
	const id = React.useId();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<SearchFormInt>({ mode: 'onChange' });

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='Username'
					{...register('username', {
						required: {
							value: true,
							message: 'The username field is required!',
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
				{errors.username && errors.username.message}
				<select {...register('region', { required: true })}>
					{regions.map((region: regionsInt, index: number) => (
						<option
							key={`${id}-${region.initials}-${index}`}
							value={region.url}>
							{region.initials}
						</option>
					))}
				</select>
				{errors.region && errors.region.message}
				<button
					type='submit'
					disabled={!isValid}
					className={`${
						isValid
							? 'cursor-pointer'
							: 'cursor-not-allowed opacity-80'
					} rounded-3xl bg-blue-900 py-2 px-4 text-base font-medium text-white hover:opacity-80`}>
					Submit
				</button>
			</form>
		</React.Fragment>
	);
};

export default SearchForm;
