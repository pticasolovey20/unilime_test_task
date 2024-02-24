export type Product = {
	id: number;
	title: string;
	body: string;
	price: string;
	thumbnail: string;
	created_at: string;
	updated_at: string;
};

export type FiltersValues = {
	from: string;
	to: string;
	price_from: string;
	price_to: string;
	title: string;
};

export type Credentials = {
	email: string;
	password: string;
};

export type User = {
	id?: number;
	name?: string;
	email?: string;
	profile_image?: string;
};

export type RefreshTokenResponse = {
	access_token: string;
	token_type: string;
	expires_in: number;
	user: {
		id: number;
		name: string;
		email: string;
		email_verified_at: null;
		created_at: string;
		updated_at: string;
	};
};
