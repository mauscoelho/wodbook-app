declare type User = {
	firstName: string;
	lastName: string;
	email: string;
	updatedAt: string;
	createdAt: string;
	boxName: string;
	dateOfBirth: string;
	gender: 'male' | 'female' | 'other';
	height: number;
	weight: number;
	avatarUrl: string;
	id: string;
}

declare type Workout = {
	title: string;
	measurement: string;
	description: string;
	global: boolean;
	createdBy: string;
	createdAt: Date;
	modifiedAt: Date;
	id: string;
};

declare type Movement = {
	name: string;
	measurement: string;
	createdBy: string;
	createdAt: Date;
	modifiedAt: Date;
	id: string;
};
