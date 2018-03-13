export class Utils {
	static mapKeyValArray(arr) {
		const map: { [key: string]: string } = {};
		arr.forEach((item) => {
			const key = item[0];
			const val = item[1];
			map[key] = val;
		});

		return map;
	}

	static calculateAge(birthday: string) {
		const date = new Date(birthday);
		const ageDifMs = Date.now() - date.getTime();
		const ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}
