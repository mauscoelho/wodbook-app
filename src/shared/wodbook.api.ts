// import { Buffer } from 'buffer';
import { workouts, movements, user } from './mock.data';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOTczYzE4ZWU2ZjgyYTE0NWYyNDI5OCIsImVtYWlsIjoiZWdpbGxzdmVpbmJqb3Juc0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTE5ODYwODIzLCJleHAiOjE1NTEzMTA0MjN9.yMbSuyo3Op4mMeeguEszy0Dp1WyDz-uMa8t8h7FUjXQ';

export class WodbookApi {
	static baseUrl = 'http://localhost:43210';
	static VERSION = 'v1';

	static getUrl() {
		return `${this.baseUrl}/${this.VERSION}`;
	}

	static async get(endpoint, params) {
		const url = `${this.getUrl()}/${endpoint}`;

		if (params) {
			// TODO
		}

		const res = await fetch(url, {
			headers: {
				Authorization: token
			}
		});
		const resJson = await res.json();
		return resJson.data;
	}

	// static async post(endpoint, params, body) {
	// 	const url = `${this.baseUrl}/${endpoint}`;

	// 	if (body) {
	// 		// TODO
	// 	}
	// }

	static async getWorkouts(): Promise<Workout[]> {
		return workouts as any;
		// return await this.get('workouts');
	}

	static async getMovements(): Promise<Movement[]> {
		return movements as any;
		// return await this.get('movements');
	}

	static async getUser(): Promise<User> {
		return user as any;
		// return await this.get('users/me');
	}

	static async login(username, password) {
		// const b = new Buffer(`${username}:${password}`);
		// const encodedAuth = b.toString('base64');

		// const params = {
		// 	Authorization: `Basic ${encodedAuth}`
		// };
		// const res = this.post('auth/login', params, body);
		// const token = res.token;
		const user = {
			username,
			password
		};
		return { user, token };
	}
}
