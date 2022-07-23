export interface SearchFormInt {
	onSubmit: (data: SearchFormDataInt) => void;
}

export interface SearchFormDataInt {
	username: string;
	region: string;
}

export interface SearchFormFieldErrorMessageInt {
	message?: string;
}
