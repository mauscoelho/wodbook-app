import * as MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Ionicons from 'react-native-vector-icons/Ionicons';
import * as FontAwesome from 'react-native-vector-icons/FontAwesome';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-person': [30, '#bbb'],
	'ios-person--big': [50, '#bbb'],

	'ios-person--active': [30, '#fff'],
	'ios-person--active--big': [50, '#fff'],
	'ios-person--active--very-big': [100, '#fff'],

	'ios-cog': [30, '#fff'],

	'format-list-bulleted': [30, '#bbb', MaterialIcon],
	'dumbbell': [30, '#bbb', MaterialIcon],

	// Use other Icon provider, see the logic at L39
	'facebook': [30, '#bbb', FontAwesome],
	'facebook--active': [30, '#fff', FontAwesome],
};

const defaultIconProvider = Ionicons;

const iconsMap = {};
const iconsLoaded = async () => {
	const sources = await Promise.all(
		Object.keys(icons).map((iconName) => {
			const Provider = icons[iconName][2] || defaultIconProvider;
			return Provider.getImageSource(
				iconName.replace(replaceSuffixPattern, ''),
				icons[iconName][0],
				icons[iconName][1]
			);
		})
	);

	Object.keys(icons)
		.forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);
};

export {
	iconsMap,
	iconsLoaded
};
