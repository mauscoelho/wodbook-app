import 'react-native';
import * as React from 'react';
import { Login } from '../../src/containers/Login';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

describe('Login', () => {
	it('should render correctly', () => {
		const tree = renderer.create(
			<Login onLogin={() => { }} />
		);

		expect(tree.getInstance()).toBeDefined();
	});
});
