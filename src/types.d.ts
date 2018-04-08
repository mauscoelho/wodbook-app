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
	_id: string;
}

declare type Workout = {
	title: string;
	measurement: string;
	description: string;
	global: boolean;
	createdBy: string;
	createdAt: Date;
	modifiedAt: Date;
	_id: string;
};

declare type WorkoutScore = {
	rx: boolean;
	score: string;
	notes: string;
	workoutId: string;
	measurement: string;
	createdAt: string;
	createdBy: string;
	updatedAt: string;
	_id: string;
}

declare type Movement = {
	name: string;
	measurement: string;
	createdBy: string;
	createdAt: Date;
	modifiedAt: Date;
	_id: string;
};

declare type MovementScore = {
	sets: number;
	score: string;
	notes: string;
	movementId: string;
	measurement: string;
	createdAt: string;
	createdBy: string;
	updatedAt: string;
	_id: string;
}
