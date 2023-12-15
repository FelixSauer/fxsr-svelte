import type { MenuItem } from './MenuItem';

export const FooterMenu: MenuItem[] = [
	{
		label: 'github',
		target: 'https://github.com/FelixSauer',
		icon: 'line-md:github'
	},
	{
		label: 'linkedin',
		target: 'https://www.linkedin.com/in/felix-sauer/',
		icon: 'line-md:linkedin'
	},

	{
		label: 'patreon',
		target: 'patreon.com/fxsr',
		icon: 'line-md:patreon',
		disable: true
	},

	{
		label: 'buymeacoffee',
		target: 'https://www.buymeacoffee.com/felixsauer',
		icon: 'line-md:buy-me-a-coffee-twotone',
		disable: true
	},
	{
		label: 'twitter',
		target: 'https://twitter.com/FelixSauer82',
		icon: 'line-md:twitter-x',
		disable: true
	},
	{
		label: 'discord',
		target: 'https://www.linkedin.com/in/felix-sauer/',
		icon: 'line-md:discord'
	},

	{
		label: 'Imprint',
		target: 'imprint',
		icon: 'imprint'
	}
];
