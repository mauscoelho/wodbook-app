export class Utils {
	static mapKeyValArray(arr) {
		const map = {};
		arr.forEach((item) => {
			const key = item[0];
			const val = item[1];
			map[key] = val;
		});

		return map;
	}
}