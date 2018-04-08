import { Utils } from '../../src/shared/utils';
import * as sinon from 'sinon';

describe('Utils', () => {
	describe('mapKeyValArray', () => {
		it('should create a map from key value array', () => {
			const arr = [
				['key1', 'val1'],
				['key2', 'val2']
			];

			const res = Utils.mapKeyValArray(arr);

			expect(res).toHaveProperty('key1', 'val1');
			expect(res).toHaveProperty('key2', 'val2');
			expect(res).not.toHaveProperty('key3');
		});
	});

	describe('calculateAge', () => {
		sinon.stub(Date, 'now').returns(1523208547400);

		it('should calculate proper date string to age', () => {
			const res = Utils.calculateAge('06-12-1991');

			expect(res).toEqual(26);
		});
	});
});
