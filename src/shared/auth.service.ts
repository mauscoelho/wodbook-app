import { AsyncStorage } from 'react-native';
import { WodbookApi } from './wodbook.api';
import { Utils } from './utils';

const tokenKey = 'token';
const userKey = 'user';

export class AuthService {
	static async getAuthInfo() {
		const values = await AsyncStorage.multiGet([tokenKey, userKey]);
		const mappedObj = Utils.mapKeyValArray(values);

		return {
			header: {
				Authorization: `Basic ${mappedObj[tokenKey]}`
			},
			token: mappedObj[tokenKey],
			user: JSON.parse(mappedObj[userKey])
		};
	}

	static async login(username, password) {
		const data = await WodbookApi.login(username, password);
		const { user, token } = data;

		await AsyncStorage.multiSet([
			[tokenKey, token],
			[userKey, JSON.stringify(user)]
		]);

		return data;
	}

	static async logout() {
		// TODO
	}
}
