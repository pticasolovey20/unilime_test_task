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
	from: string | null;
	to: string | null;
	price_from: string | null;
	price_to: string | null;
	title: string | null;
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

export type TokenResponse = {
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
