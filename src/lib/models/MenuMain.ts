import type { MenuItem } from './MenuItem';

export const MainMenu: MenuItem[] = [
	{
		label: 'whoami',
		target: 'landing',
		icon: 'line-md:person',
		internal: true,
		alignRight: true
	},
	{
		label: 'services',
		target: 'services',
		icon: 'material-symbols-light:design-services',
		internal: true,
		alignRight: true
	},
	{
		label: 'Contact',
		target: 'contact',
		icon: 'material-symbols:connect-without-contact-rounded',
		internal: true,
		alignRight: true
	}
];
