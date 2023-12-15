import type { MenuItem } from './MenuItem';

export const MainMenu: MenuItem[] = [
	{
		label: 'hey there!',
		target: 'landing',
		icon: 'material-symbols-light:flight-land',
		internal: true,
		alignRight: true
	},
	{
		label: 'About',
		target: 'about',
		icon: 'material-symbols-light:frame-person',
		internal: true,
		alignRight: true
	},
	{
		label: 'Leistungen',
		target: 'services',
		disable: true,
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
